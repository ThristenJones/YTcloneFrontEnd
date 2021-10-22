import React, { useState } from 'react';

function SearchBar() {
  const [videoSearch, setVideoSearch] = useState  ('')

  const Video = (event) => {
    event.preventDefault();
    setVideoSearch(event.target.value);
    console.log(videoSearch);
  }
    return (
      <div className = 'SearchBar_input'>
      <form onSubmit = {(event) => Video (event)}>
        <div className='input-group'>
        <input type='text' className='form-control rounded' placeholder='Search' aria-label='Search' value = {videoSearch} onChange = {(event) => setVideoSearch(event.target.value)}
        aria-describedby='search-addon'  />
        <button type='button' className='btn btn-outline-primary'>search</button>
      </div>
      </form>
      </div>
    )
}
//<div className=“searchBar__right”>
  //      <VideoCallIcon className=“searchBar__icon”/>
    //    <AppsIcon className=“searchBar__icon”/>
      //  <NotificationIcon className=“searchBar__icon”/>
      //</div>
export default SearchBar;