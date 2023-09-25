import { useContext, useState } from 'react'
import { Search } from './Search'
import { Conversations } from './Conversations'
import { AccountContext } from '../../context/AccountProvider'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


export const Menu = () => {
    const { account } = useContext(AccountContext)
    const [text, setText] = useState("");


    return (
        <>
            <div style={{ paddingRight: "0.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ paddingLeft: "0.5rem", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: '1rem' }}>
                        <div>
                            <img src={account?.picture} style={{ height: "40px", width: "40px", borderRadius: "32px", }} />
                        </div>
                        <div>
                            <PersonAddAlt1Icon />
                        </div>
                    </div>
                    <div style={{ width: "auto", cursor: "pointer" }}>
                        <Search setText={setText} />
                    </div>
                </div>
            </div>
            <div style={{ height: "90%", borderRadius: "8px" }}>
                <Conversations text={text} />
            </div>
        </>
    )
}
