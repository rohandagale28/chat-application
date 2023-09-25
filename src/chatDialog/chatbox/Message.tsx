import React from 'react'
import { formatData } from '../../utils/commonUtils'
import { AccountContext } from '../../context/AccountProvider'
import { Box } from '@mui/material'

const Message = ({ message }: any) => {
    const { account } = React.useContext(AccountContext)

    const scrollRef = React.useRef(null)

    React.useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, [message])
    return (
        <Box ref={scrollRef} >
            {account.sub === message.senderId ?
                <>
                    <div style={{ height: "auto", width: "auto", display: "flex", boxSizing: "border-box", flexDirection: "row", justifyContent: "flex-end" }}>
                        <div style={{ height: "2rem", width: "auto", display: "flex", gap: "1rem", backgroundColor: "#0075ED", borderRadius: "12px", padding: "0.4rem 1rem 1rem 1rem", minWidth: "2rem", justifyContent: "center", alignItems: "center", position: "relative", paddingBottom: "1rem", color: "#e5e5e5" }}>
                            {message.text}
                            <div style={{ position: "absolute", right: "12px", bottom: "4px", fontSize: "12px", color: "#e5e5e5AA" }}>
                                {formatData(message.createdAt)}
                            </div>
                        </div>
                    </div >
                </> :
                <>
                    <div style={{ height: "auto", width: "auto", display: "flex", boxSizing: "border-box", flexDirection: "row", justifyContent: "flex-start" }}>
                        <div style={{ height: "2rem", width: "auto", display: "flex", gap: "1rem", backgroundColor: "#fff", borderRadius: "12px", padding: "0.4rem 1rem 1rem 1rem", justifyContent: "center", minWidth: "2rem", alignItems: "center", position: "relative", paddingBottom: "1rem" }}>
                            {message.text}
                            <div style={{ position: "absolute", right: "12px", bottom: "4px", fontSize: "12px", color: "#696969" }}>
                                {formatData(message.createdAt)}
                            </div>
                        </div>
                    </div >
                </>
            }
        </Box>
    )
}

export default Message