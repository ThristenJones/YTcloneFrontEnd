import React, { useState, useEffect }  from 'react';
import axios from 'axios';

const DisplayComments = (props) => {

    const [displayComments, setDisplayComments] = useState ({});

    useEffect(() => {
         axios.get('http://localhost:5000/api/comments/46h4by4r74')
        .then(response => setDisplayComments(response.data))
    }, []);


    return (
        <div>
           {displayComments && displayComments.map(function(el) {
               return <ul>
                   <li>{el}</li>
               </ul>;
           })
           
        }//array.map//
        </div>
    );
}

export default DisplayComments;