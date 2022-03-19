import React, { useEffect,useState } from 'react';
import User from "./User";
import Element from "./Element.css";
import load from "./users"
 
export default function Userlist () {
    const[users,setUsers]=useState([])

    useEffect(()=>{
        load().then((result)=>setUsers(result.data))
    },[])

    return (
        <div className="userlist">
            {users.map(profile=> <User users={profile} key={profile.id}/> )}
        </div>
    );
};

