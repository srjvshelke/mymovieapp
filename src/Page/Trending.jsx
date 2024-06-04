import React, { useEffect, useState } from 'react'
import Card from "../component/Card"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trending = () => {

    let [datafortrend, setdatafortrend] = useState([]);
    const [page, setPage] = useState(1);
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=3ad017c328b9b52cdd05862101d1cb27`);
        setdatafortrend(data.results)
        console.log(data.results);
        console.log( [...Array(datafortrend.length / 5)])
    };
    useEffect(() => {
        fetchTrending();
    }, [])

    return (
        <div className='Trending'>
            {/* heading */}
            <div className='Trending_heading flex'>
                <h2> Trending Page</h2>
            </div>

            {/* body */}
            {/* <div className='Trending_body flex'>
                {
                    datafortrend.slice(0, 10).map((ele, index) => {
                        return (
                            <>
                                <Card img={ele.poster_path} name={ele.title || ele.name} date={ele.release_date || ele.first_air_date} type={ele.media_type} />
                            </>
                        )

                    })
                }

            </div> */}

            {/* footer */}
            <div class="pagination">
                <span className={page > 1 ? "" : "pagination__disable"}>◀</span>

                {
                   
                    [...Array(datafortrend.length%6==0?datafortrend.length/6:Math.floor(datafortrend.length/6)+1)].map((ele, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} >{i + 1}</span>
                    })
                }

                <span className={page < datafortrend.length / 6 ? "" : "pagination__disable"}>▶</span>
            </div>
        </div>

    );
}

export default Trending