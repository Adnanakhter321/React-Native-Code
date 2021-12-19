import React from 'react'
import Button from '@mui/material/Button';
import { signOut, auth } from "../configs/Firebase"
import { useHistory } from "react-router-dom";

const Admin = () => {
    let history = useHistory()
    const Logout = () => {
        signOut(auth).then(() => {
            history.push('/')
        })
    }
    return (
        <div>
            <div style={{ backgroundColor: '#353d37', height: 60 }}>
                <div style={{ display: 'inline-block' }} className="text">
                    <h4 style={{ display: 'inline-block', color: 'white', marginLeft: 7 }}>Admin Panel</h4>
                </div>
                <Button style={{ float: 'right', marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained" 
                onClick={Logout}
                >Logout</Button>
                <div className="buttonPAR">

                </div>
            </div>
        </div>
    )
}

export default Admin
