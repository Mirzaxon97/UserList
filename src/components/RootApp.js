import React from 'react';
import { Route, Routes } from 'react-router';
import Home from "./Home";
import UserList from "./UserList";

const RootApp = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/user" element={<UserList/>}/>
            </Routes>
        </div>
    );
};

export default RootApp;