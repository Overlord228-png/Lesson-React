import React  from "react";

const SearchUser = (props) => {

    return(
        <div>
            <input onChange={(e)=>props.setSearches(e.target.value)} placeholder="search" value={props.search}/>
        </div>
    )
}
export default SearchUser