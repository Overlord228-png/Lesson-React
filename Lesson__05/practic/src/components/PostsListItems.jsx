import React from "react";

const PostsListItems = (props) => {
    return(
        <div>
            {
                props.posts.map((post,idx) =>
                    <div key={idx}>
                        <h2>{idx+1}{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            }
        </div>
    )
}
export default PostsListItems