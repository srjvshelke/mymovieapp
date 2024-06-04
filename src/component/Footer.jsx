import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function Footer() {
  return (
    <div className="footer bottomsticky">
      <div className='icon'>
        <WhatshotIcon  />
        <h6>Trending</h6>
      </div>
      <div className='icon'>
        <MovieIcon />
        <h6>MOvie</h6>
      </div>

      <div className='icon'>
        <TvIcon />
        <h6>TV Show</h6>
      </div>


      <div className='icon'>
        <FindInPageIcon />
        <h6>Search</h6>
      </div>


    </div>
  )
}

export default Footer