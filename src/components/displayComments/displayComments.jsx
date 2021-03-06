import React, { useState, useEffect }  from 'react';
import axios from 'axios';

const DisplayComments = (props) => {

    const [displayComments, setDisplayComments] = useState ([]);

    useEffect(() => {
         axios.get('http://localhost:5000/api/comments/46h4by4r74')
        .then(response => setDisplayComments(response.data))
    }, []);


    return (
        <div>
            {
            displayComments && displayComments.map(comment =>{
               return (
                        <li>
                            {comment.text}
                            <br/>
                            {comment.timeStamp}

                            {comment.replies.map(reply => [
                                reply.text,
                                reply.timeStamp
                            ])}
                        </li>
                    );
           }) 
           }
        </div>
    );
}

export default DisplayComments;