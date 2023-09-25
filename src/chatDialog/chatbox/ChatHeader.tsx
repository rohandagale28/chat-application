import React, { useContext, useEffect } from 'react'
import { AccountContext } from '../../context/AccountProvider'

export const ChatHeader = ({ person }: any) => {
    const { activeUsers } = useContext(AccountContext)

    useEffect(() => {
    }, [activeUsers])
    return (
        <React.Fragment>
            <div style={{ height: "4rem", backgroundColor: "#282828", display: "flex", flexDirection: "row", justifyContent: "space-between", borderRadius: "8px", color: "e5e5e5" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: "1rem" }}>
                    <img src={person.picture} style={{ height: "40px", width: "40px", borderRadius: "32px", marginRight: "2rem" }} />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <p style={{ fontWeight: "600", color: "e5e5e5" }}>{person.name}</p>
                        <p style={{ color: "#e5e5e5" }}>{activeUsers?.find((user: any) => user.sub === person.sub) ? "online" : "offline"}</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </React.Fragment>
    )
}
