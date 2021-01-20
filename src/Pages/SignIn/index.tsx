import React, { useContext } from 'react'
import AuthContext from '../../Contexts/auth';

const SignIn: React.FC = () => {
    const { signIn } = useContext(AuthContext)
    return <button  onClick={signIn}>Sign In</button>
}
export default SignIn;