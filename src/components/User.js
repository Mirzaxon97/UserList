import React from 'react';
import UserImage from "./UserImage";
import Element from "./Element.css";

const User = ({users}) => {
    console.log(users)
    return (
        <div className="card">
           <UserImage base={users.avatar}/>
           <h2>{users.first_name} {users.last_name} </h2>
           <h3>{users.email}</h3>
        </div>
    );
};

export default User;