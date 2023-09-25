import React from 'react'
import { AccountContext } from './context/AccountProvider'
import { ChatDialog } from './chatDialog/ChatDialog'
import { LoginDialog } from './account/LoginDialog'

export const Messenger = () => {
    const { account } = React.useContext(AccountContext)

    return (
        <React.Fragment>
            {account ? <ChatDialog /> : <LoginDialog />}
        </React.Fragment>
    )
}
