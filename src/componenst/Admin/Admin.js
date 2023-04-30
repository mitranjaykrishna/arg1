import React from "react";
import { NavLink } from "react-router-dom";

const Admin1=()=>{
    return (
        <div>
            <button type="submit" ><NavLink exact activeClassName="active" to="/certificateSave">ADD Certificate</NavLink></button>
        </div>
    )
}

export default Admin1;