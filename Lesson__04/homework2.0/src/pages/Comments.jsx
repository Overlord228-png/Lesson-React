import React, { useState, useEffect, useMemo } from 'react';
import AddComentsItem from '../components/AddComentsItem'
import CommentsList from '../components/CommentsList'
import SearchComments from '../components/SearchComments'
import Header from '../components/Header'

const Comments = () => {
    const [ comments, setComments ] = useState([])
    const [ search, setSearches ] = useState('')

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log(response)
            if(response.status === 200) {
                console.log('good')
            }
            return response.json()
        })
        .then((comments)=>{
            const commentsFinish = comments.slice();
            setComments(commentsFinish)
        })
    }, [])

    const addComment = (comment) => {
        setComments([...comments, comment])
    }
    const deleteComment = (name) => {
        console.log(name)
        const newComments = comments.filter(comment => comment.name !== name)
        setComments(newComments)
    }
    
    const searchItems = () => {
        let newCommItems = []
        for (const comment of comments) {
            if(comment.name.startsWith(search)){
            newCommItems.push(comment)
        }
    }
    return newCommItems
}
const searchedComments = useMemo(searchItems, [search, comments])

    return (
        <>
            <Header/>
            <div>Comments</div>
            <div>
                <AddComentsItem addComment={addComment}/>
            </div>
            <div>
                <br/>
                    <SearchComments setSearches={setSearches} search={search} />
                <br/>
            </div>
            <div>
                <CommentsList deleteComment={deleteComment} comments={searchedComments}/>
            </div>
        </>
    )
}
export default Comments