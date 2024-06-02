import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function Footer() {
  return (
    <div className="footer">
      <div className='icon'>
        <WhatshotIcon />
        <h2>Trending</h2>
      </div>
      <div className='icon'>
        <MovieIcon />
        <h2>MOvie</h2>
      </div>

      <div className='icon'>
        <TvIcon />
        <h2>TV Show</h2>
      </div>


      <div className='icon'>
        <FindInPageIcon />
        <h2>Search</h2>
      </div>


    </div>
  )
}

export default Footer