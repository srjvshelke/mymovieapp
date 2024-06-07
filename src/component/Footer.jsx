import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer bottomsticky">
      <Link to="/Trending">
        <div className='icon'>
          <WhatshotIcon />
          <h6>Trending</h6>
        </div>
      </Link>
      <Link to="/Movie">
        <div className='icon'>
          <MovieIcon />
          <h6>MOvie</h6>
        </div>
      </Link>

      <Link to="Tvshow">
        <div className='icon'>
          <TvIcon />
          <h6>TV Show</h6>
        </div>
      </Link>

      <Link to="Search">
        <div className='icon'>
          <FindInPageIcon />
          <h6>Search</h6>
        </div>
      </Link>


    </div>
  )
}

export default Footer