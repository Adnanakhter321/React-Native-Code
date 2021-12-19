import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { signOut, auth, doc, db, setDoc, deleteDoc } from "../configs/Firebase"
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
const Admin = () => {
    let history = useHistory()

    const foodreq = useSelector((state) => state.todoReducer.foodrequests)
    const Logout = () => {
        signOut(auth).then(() => {
            history.push('/')
        })
    }
    useEffect(() => {
        console.log(foodreq);
    }, [foodreq]);

    const AcceptFoodReq = async (el) => {
        let newuid = new Date().getTime().toString();
        const id = el.target.parentNode.parentNode.id;
        const com = el.target.parentNode.parentNode
        foodreq.map(async(el) => {
            if (el.uid === id) {
                const Data = {
                    uid: newuid,
                    Cnicurl: el.Cnicurl,
                    checked: el.checked,
                    cnic: el.cnic,
                    dob: el.dob,
                    fathername: el.fathername,
                    name: el.name,
                    nooffamily :el.nooffamily,
                    useruid: el.useruid,
                }
                let userRef = doc(db, 'AcceptedFoodRequests', newuid)
                let done = await setDoc(userRef, Data)
                await deleteDoc(doc(db, "FoodRequests", el.uid));
                    com.remove();
                if(done){
                        alert('Accepted Done')
                }
            }
            return null
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
                    onClick={() => history.push("/adminpanelpendingrequests")}
                >Pending Food Request</Button>
                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                        onClick={() => history.push('/adminpanel-accepted-requests')}
                    >Accepted Food Request</Button>
                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                        onClick={() => history.push('/adminpanel-rejected-requests')}
                    >Rejected Food Request</Button>
                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                        onClick={() => history.push('/adminpanel-addbranch-manager-c')}
                    >Add Brank Manager Credentials</Button>
                </div>
            </div>
            <div>
                {/* <h1>              PENDING       </h1> */}



                {
                    foodreq.map((el) => {
                        return (
                            <div key={el?.uid} id={el?.uid} style={{ backgroundColor: '#3a403c', display: 'inline-block', marginTop: 20, marginLeft: 20, padding: 20, color: 'white' }}>
                                <h3>Food Help Request {el?.useruid}</h3>
                                <h5 style={{ flexDirection: 'column', display: 'flex' }}>
                                    Name: {el?.name}
                                </h5>
                                <h5>Fathername: {el?.fathername}</h5>
                                <h5>Help: {el?.checked}</h5>
                                <h5>CNIC: {el?.cnic}</h5>
                                <h5>Date of birth: {el?.dob}</h5>
                                <h5> no of family:{el?.nooffamily}</h5>
                                <div> <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                                    onClick={AcceptFoodReq}
                                >Accept Food Request</Button>
                                    <Button style={{ marginTop: 10, marginRight: 10, backgroundColor: '#515c54' }} variant="contained"
                                    >Reject Food Request</Button></div>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}

export default Admin
