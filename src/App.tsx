import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
import { Messenger } from './Messenger';

const App = () => {
  const clientId = "742911147063-8s2mes8aptq857dsome6opme1lkuoffb.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App