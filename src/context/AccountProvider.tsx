import { createContext, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export const AccountContext = createContext<any | null>(null)

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
    const [account, setAccount] = useState<object>({})
    const [person, setPerson] = useState<object>({})
    const [activeUsers, setActiveUsers] = useState<Array<object>>([])
    const [socket, setSocket] = useState<Socket | null>(null)
    const [message, setMessage] = useState<Array<[]>>([])

    useEffect(() => {
        setSocket(io("ws://localhost:9000"))
    }, [])

    return (
        <AccountContext.Provider value={{ account, setAccount, person, setPerson, activeUsers, setActiveUsers, socket, message, setMessage }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider 