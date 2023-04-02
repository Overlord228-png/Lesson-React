import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItem = () =>{
    return(
        <header className="header">
            <ul>
                <li>
                    <NavLink to="/CapitalCitiesCIS">Capital Cities CIS</NavLink>
                </li>
                <li>
                    <NavLink to="/SearchByCity">Search by city</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default HeaderItem