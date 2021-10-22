import React, { Component } from 'react';
import TitleBar from './Titlebar/titleBar';
import VideoPlayer from './videoPlayer/videoPlayer';
import '../components/app.css'
import SearchBar from './searchBar/searchBar';
import DisplayComments from './displayComments/displayComments';
import PostComment from './postComment/postComment';

const createComment = (newComment) => {
    console.log(`new comment: ${newComment}`)
}

const App = () => {
    return ( 
        <div>
            <SearchBar />
            <TitleBar /> 
            <VideoPlayer />
            <PostComment createNewComment = {createComment} />
           <ul><DisplayComments /></ul>
           
        </div>
        )
}
export default App;

