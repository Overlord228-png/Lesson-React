import React ,{ NavLink } from "react-router-dom";

const HeaderItem = () =>{
    return(
        <header className="header">
            <ul>
                <li>
                    <NavLink to="/TranslateItem">TranslateItem</NavLink>
                </li>
                <li>
                    <NavLink to="/FutureUpdate">FutureUpdate</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default HeaderItem