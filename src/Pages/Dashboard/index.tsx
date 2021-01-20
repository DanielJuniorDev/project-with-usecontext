import React, { useContext } from 'react'
import AuthContext from '../../Contexts/auth';

const Dashboard: React.FC = () => {
    const { signOut } = useContext(AuthContext)
    return <button onClick={signOut} >Sign Out</button>
}


export default Dashboard;
