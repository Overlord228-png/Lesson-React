import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItem = () =>{
    return(
        <header className="header">
            <ul>
                <li>
                    <NavLink to="/TranslateItem">TranslateItem</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default HeaderItem