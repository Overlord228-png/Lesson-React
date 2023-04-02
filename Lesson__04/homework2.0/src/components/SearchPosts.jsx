import React  from "react";

const SearchPosts = (props) => {

    return(
        <div>
            <input onChange={(e)=>props.setSearches(e.target.value)} placeholder="search" value={props.search}/>
        </div>
    )
}
export default SearchPosts