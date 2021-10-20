import React, { useState } from 'react';
// import axios from 'axios';

function VideoPlayer () {


    // const [video, setVideo] = useState('')
    // axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId={carebears}&type=video&key={AIzaSyCK3sM78Jbmku9JeWmNlj2mJI3ZGkV1y5g}')

    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360" title="video"
  src="https://www.youtube.com/embed/M7lc1UVf-VE"
  frameborder="0"></iframe>
    )
}

export default VideoPlayer