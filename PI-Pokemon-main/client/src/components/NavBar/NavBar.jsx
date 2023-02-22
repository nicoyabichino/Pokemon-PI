import { Link } from "react-router-dom";
import React from "react";
const NavBar = () => {
return (
    <div>
        <Link to = "/home">Home</Link>
        <Link to = "/create">Form</Link>
    </div>
)
}

export default NavBar;