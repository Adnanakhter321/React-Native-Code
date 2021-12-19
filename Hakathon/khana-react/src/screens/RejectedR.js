import React from 'react'
import Button from '@mui/material/Button';
import { signOut, auth } from "../configs/Firebase"
import { useHistory } from "react-router-dom";

const RejectedR = () => {
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
            </div>
            <div className="buttonPAR">
                <div style={{ marginLeft: 90 }}><Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                onClick={()=> history.push("/adminpanelpendingrequests")}
                >Pending Food Request</Button>
                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                   onClick={()=>history.push('/adminpanel-accepted-requests')}
                   >Accepted Food Request</Button>
                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                      onClick={()=>history.push('/adminpanel-rejected-requests')}
                    >Rejected Food Request</Button>
                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                      onClick={()=>history.push('/adminpanel-addbranch-manager-c')}
                    >Add Brank Manager Credentials</Button>
                    </div>
            </div>
            <div>
                <h1>Rejected</h1>
            </div>
        </div>
    )
}

export default RejectedR
