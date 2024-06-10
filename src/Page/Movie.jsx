
import React, { useEffect, useState } from 'react'
import Card from "../component/Card"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../component/Pagination';
function Movie() {
  let [datafortrend, setdatafortrend] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3ad017c328b9b52cdd05862101d1cb27&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
      setdatafortrend(data.results)
      console.log(data.results);
  };
  useEffect(() => {
      fetchTrending();
  }, [])


  return (
      <div className='body'>
          <div className='Trending flex'>
              {/* heading */}
              <div className='Trending_heading flex'>
                  <h2> Movie Page</h2>
              </div>

              {/* body */}
              <div className="bodypagin">
                  <div className='Trending_body'>
                      {
                          datafortrend.slice(page * 10 - 10, page * 10).map((ele, index) => {
                              return (
                                  <>
                                      <Card img={ele.poster_path} name={ele.title || ele.name} date={ele.release_date || ele.first_air_date} type={ele.media_type} />
                                  </>
                              )

                          })
                      }

                  </div>

                  {/* pagination */}
                  <Pagination datafortrend={datafortrend} page={page} setPage={setPage} />

              </div>
          </div>
      </div>


  );
}

export default Movie