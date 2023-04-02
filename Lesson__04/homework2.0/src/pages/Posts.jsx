import React, { useState, useEffect, useMemo } from 'react';
import AddPostItem from '../components/AddPostItem';
import PostsList from '../components/PostsList';
import SearchPosts from '../components/SearchPosts';
import Header from '../components/Header'

const Posts = () => {
    const [ posts , setPosts ] = useState([])
    const [ search, setSearches ] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response)
            if(response.status === 200) {
                console.log('good')
            }
            return response.json()
        })
        .then((posts)=>{
            const postsFinish = posts.slice();
            setPosts(postsFinish)
        })    
    }, [])
    
    const addPost = (post) => {
        setPosts([...posts,post])
    }
    const deletePost = (title) => {
        const newPosts = posts.filter(post=>post.title !== title)
        setPosts(newPosts)
    }

    const searchItems = () => {
        let newPosItems = []
        for (const post of posts) {
            if(post.title.startsWith(search)){
                newPosItems.push(post)
        }
    }
    return newPosItems
}
const searchedPosts = useMemo(searchItems, [search, posts])
    return (
        <>
            <Header/>
            <div>Posts</div>
            <div className="add__post">
                <AddPostItem addPost={addPost} />
            </div>
            <div>
                <br/>
                    <SearchPosts setSearches={setSearches} search={search} />
                <br/>
            </div>
            <div>
                <PostsList deletePost={deletePost} posts={searchedPosts} />
            </div>
        </>
    )
}
export default Posts