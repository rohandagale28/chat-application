import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../service/Api'
import Conversation from './Conversation'
import { AccountContext } from '../../context/AccountProvider'

export const Conversations = ({ text }: any) => {
    const { account } = useContext(AccountContext)
    const [searchFilterText, setSearchFilterText] = useState<Array<object>>([])

    const fetchData = async () => {
        try {
            const response = await getUsers();
            const filterData = response?.filter((user: any) =>
                user.name.toLowerCase().includes(text.toLowerCase())
            );
            setSearchFilterText(filterData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [text]);

    return (
        <>
            <div style={{ marginTop: '1.6rem', marginRight: '0.5rem' }}>
                {searchFilterText?.map((contacts: any) => (
                    <React.Fragment key={contacts._id}>
                        {contacts?.sub !== account?.sub && (
                            <Conversation contact={contacts} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};
