import { useContext, useEffect, useState } from 'react'
import { ChatHeader } from './ChatHeader'
import { Messages } from './Messages'
import { ChatInput } from './ChatInput'
import { AccountContext } from '../../contexapit/AccountProvider'
import { getConversation, newMessage } from '../../service/Api'
import { getMessages } from '../../service/Api'

export const ChatBox = () => {
    const { person, account, socket, setMessage } = useContext(AccountContext)
    const [conversations, setConversations] = useState<any>({})
    const [msgFlag, setmsgFlag] = useState<boolean>(false)
    const [text, setText] = useState<string>("")
    const [incommingMessage, setIncommingMessage] = useState<any>()

    const sendText = async (e: any) => {
        e.preventDefault()
        let message = {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversations._id,
            type: "text",
            text: text
        }
        if (text.length === 0) {
            console.log("message should be something")
        }
        else {
            try {
                socket.emit("sendMessage", message)
                await newMessage(message);
                console.log(message)
            } catch (err) {
                console.log("coldn't send message")
            }
        }
        setText("")
        setmsgFlag(prev => !prev)
    }


    useEffect(() => {
        socket.on("getMessage", (data: object) => {
            console.log(data, "this data is comming in msg format")
            setIncommingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [incommingMessage])

    useEffect(() => {
        const getConversationDetails = async () => {
            const res = await getConversation({ senderId: account.sub, receiverId: person.sub })
            setConversations(res)
            const data = await getMessages(conversations._id)
            setMessage(data)
        }
        getConversationDetails()

    }, [person?._id, conversations?._id, msgFlag])

    useEffect(() => {
        incommingMessage && conversations?.members?.includes(incommingMessage.senderId) &&
            setMessage((prev: any) => [...prev, incommingMessage])
    }, [incommingMessage, conversations, msgFlag])

    return (
        <>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "10px", flexGrow: "2", boxSizing: "border-box", }}>
                <div>
                    <ChatHeader person={person} />
                </div>
                <div style={{ flexGrow: "1", height: "70%" }} >
                    <Messages />
                </div>
                <div>
                    <ChatInput setText={setText} sendText={sendText} text={text} />
                </div>
            </div>
        </>
    )
}
