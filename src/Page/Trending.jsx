import React, { useEffect, useState } from 'react'
import Card from "../component/Card"
import axios from 'axios';

const Trending = () => {

    let [datafortrend, setdatafortrend] = useState([])
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=3ad017c328b9b52cdd05862101d1cb27`);
setdatafortrend(data.results)
console.log(data.results);
    };
    useEffect(() => {
        fetchTrending();
    }, [])

    return (
        <div className='Trending'>
            {/* heading */}
            <div className='Trending_heading'>
                <h2> Trending Page</h2>
            </div>

            {/* body */}
            <div className='Trending_body'>
                {
                    datafortrend.map((ele,index)=>{
                        return(
                            <>
                        <Card img={ele.poster_path} name={ele.title|| ele.name} date={ele.release_date || ele.first_air_date}/>

                            </>
                        )

                    })
                }






            </div>

            {/* footer */}
            <div className='Trending_footer'>

            </div>
        </div>

    );
}

export default Trending