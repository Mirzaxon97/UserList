import React from 'react';
import {Link} from "react-router-dom";
import Element  from "./Element.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link className="link" to="home">LOGO</Link></li>
                <li><Link className="link" to="home">HOME</Link></li>
                <li><Link className="link" to="user">USERS</Link></li>
            </ul>
            
        </div>
    );
};

export default Navbar;