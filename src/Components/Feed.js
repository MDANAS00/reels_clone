import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import UploadFile from './UploadFile';
import { database } from '../firebase';
import Posts from './Posts';
import Navbar from './Navbar';

function Feed() {
  const {user,logout} = useContext(AuthContext)
  const [userData,setUserData] = useState('')

  useEffect(()=>{
        const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
            setUserData(snapshot.data())
        })
        return ()=> {unsub()}
    },[user]) //user will check if the same user is loged in or not. with the help of event listener.

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Navbar/>
      <UploadFile user={userData}/>
      <Posts userData={userData}/>
    </div>
  )
}

export default Feed
