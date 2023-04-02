import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItem = () =>{
    return(
        <header className="header">
            <ul>
                <li>
                    <NavLink to="/PlayersItem">PlayersItem</NavLink>
                </li>
                <li>
                    <NavLink to="/TeamsItem">TeamsItem</NavLink>
                </li>
                <li>
                    <NavLink to="/GameItem">GameItem</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default HeaderItem