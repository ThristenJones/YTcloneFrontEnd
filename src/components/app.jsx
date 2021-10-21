import React, { Component } from 'react';
import TitleBar from './Titlebar/titleBar';
import VideoPlayer from './videoPlayer/videoPlayer';
import '../components/app.css'
import SearchBar from './searchBar/searchBar';
import DisplayComments from './displayComments/displayComments';



const App = () => {
    return ( 
        <div>
            <SearchBar />
            <TitleBar /> 
            <VideoPlayer />
            <DisplayComments />
        </div>
        )
}
export default App;

