import { useContext, useEffect } from 'react'
import { Menu } from './menu/Menu'
import { ChatBox } from './chatbox/ChatBox'
import { AccountContext } from '../context/AccountProvider'


export const ChatDialog = () => {
    const { setAccount, person, socket, account, setActiveUsers } = useContext(AccountContext)

    const LogOut = () => {
        // socket.on('disconnect', account)
        window.localStorage.removeItem("user")
        setAccount(null)
    }

    useEffect(() => {
        console.log("messanger mounted")
        const user: any = window.localStorage.getItem("user")
        const existingUser = JSON.parse(user)
        setAccount(existingUser)
        if (socket) {
            socket.emit('addUsers', account);
            socket.on("getUsers", (users: Array<object>) => {
                setActiveUsers(users);
            })
        }else {
            console.log("error")
        }
    }, [socket])

    return (
        <>
            <div style={{ height: "100vh", width: "100%", backgroundColor: "#fff", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <div style={{ height: "100% ", width: "100%", backgroundColor: "#141414", padding: "1rem", boxSizing: "border-box", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <div className='left' style={{ height: "100%", width: "20%", margin: "0rem" }}>
                        <Menu />
                    </div>
                    <div className='right' style={{ height: "100%", width: "80%" }}>
                        {Object.keys(person).length ?
                            <ChatBox />
                            :
                            <>Empty</>
                        }
                    </div>
                    <button onClick={LogOut} style={{ position: "absolute", top: "12px", right: "32px" }}>logout</button>
                </div>
            </div>
        </>
    )
}
