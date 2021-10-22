import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostComment = (props) => {


    const [text, setText] = useState  ('')
    const [videoId, setVideoId] = useState ('46h4by4r74')

     const handleChange = (event) => {
         setText(event.target.value)
         console.log(text)

     }

     const handleSubmit = (event) => {
         event.preventDefault()
         const comment = {
             text: text,
             videoId: videoId
         }

            axios.post('http://localhost:5000/api/comments/', comment)
           .then(response => console.log(response.data))
    
     }

    
    return (
        <form onSubmit = {handleSubmit}>
            <label>Add a comment</label>
            <input onChange = {handleChange} value = {text}/>
            <button type ="submit">POST COMMENT</button>
        </form>
    )
}

export default PostComment