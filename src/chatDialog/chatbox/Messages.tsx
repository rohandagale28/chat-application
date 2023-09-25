import React, { useEffect } from 'react'
import Message from './Message'
import { Box } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider'

export const Messages = () => {
    const { message } = React.useContext(AccountContext)
    console.log(message)

    useEffect(() => {
    }, [message])
    return (
        <React.Fragment>
            <Box sx={{ height: "100%", backgroundColor: "#282828", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "8px", padding: "1.4rem", boxSizing: "border-box", gap: "0.5rem", overflowY: "scroll", }}>
                {message?.map((msg: any) => {
                    return (
                        <React.Fragment key={message._id}>
                            <Message message={msg} />
                        </React.Fragment>
                    )
                })}
            </Box>
        </React.Fragment >
    )
}
