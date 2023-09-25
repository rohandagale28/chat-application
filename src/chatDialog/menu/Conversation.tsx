import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { setConversation } from '../../service/Api'

const Conversation = ({ contact }: any) => {
    const { setPerson, account, person } = useContext(AccountContext)

    const getUser = async () => {
        setPerson(contact);
        await setConversation({ senderId: account.sub, receiverId: contact.sub }) //create new conversation ID
    }
    return (
        <React.Fragment key={contact._id} >
            <div onClick={() => getUser()} style={{
                height: "4.8rem", width: "100%", display: "flex", justifyContent: "flex-start", flexDirection: "row", gap: "1rem", cursor: "pointer", backgroundColor: `${contact.sub === person.sub ? "#282828" : "#141414"}`, color: "#e5e5e5", borderRadius: "16px", alignItems: "center", position: "relative"
            }}>
                <div style={{ paddingLeft: "0.8rem" }}>
                    <img src={contact?.picture} style={{ height: "40px", width: "40px", borderRadius: "32px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", fontSize: ".9rem", gap: "6px", alignItems: "flex-start", justifyContent: "flex-start", }}>
                    <div style={{}}>
                        {contact?.name}
                    </div>
                    <div style={{ fontSize: ".8rem", color:"#999999" }}>
                        This is most recent message
                    </div>
                </div>
                <div style={{ position: 'absolute', top: "14px", right: "14px", fontSize: ".8rem" }}>
                    11:11
                </div>
            </div>
        </React.Fragment>
    )
}

export default Conversation