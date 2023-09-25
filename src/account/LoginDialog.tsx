import { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { Box } from '@mui/material'
import jwtDecode from 'jwt-decode'
import { AccountContext } from '../context/AccountProvider'
import { addUser } from '../service/Api'

export const LoginDialog = () => {
    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res: any) => {
        const decoded = jwtDecode(res.credential)
        setAccount(decoded) //storing account details in AccountContext
        await addUser(decoded) //storing user to Database
        window.localStorage.setItem("user", JSON.stringify(decoded))
    }

    const onLoginError = () => {
        console.log("Error While Login")
    }

    return (
        <>
            <Box>
                <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
        </>
    )
}
