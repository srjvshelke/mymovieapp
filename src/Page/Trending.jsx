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
    };
    useEffect(() => {
        fetchTrending();
    }, [])

    const selectPageHandler = (selectedPage) => {
        let length = datafortrend.length % 10== 0 ? datafortrend.length / 10: Math.floor(datafortrend.length / 10) + 1

        if (selectedPage >= 1 && selectedPage <= length && selectedPage !== page) {
            setPage(selectedPage)
        }
    }
    return (
        <div className='Trending'>
            {/* heading */}
            <div className='Trending_heading flex'>
                <h2> Trending Page</h2>
            </div>

            {/* body */}
            <div className="bodypagin">
                <div className='Trending_body flex'>
                    {
                        datafortrend.slice(page * 10- 10, page * 10).map((ele, index) => {
                            return (
                                <>
                                    <Card img={ele.poster_path} name={ele.title || ele.name} date={ele.release_date || ele.first_air_date} type={ele.media_type} />
                                </>
                            )

                        })
                    }

                </div>

                {/* footer */}
                <div class="pagination">
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
                    {
                        [...Array(datafortrend.length %10== 0 ? datafortrend.length /10: Math.floor(datafortrend.length / 10) + 1)].map((ele, i) => {
                            return <span key={i} onClick={() => selectPageHandler(i + 1)} className={page === i + 1 ? "pagination__selected" : ""}  >{i + 1}</span>
                        })
                    }
                    <span onClick={() => selectPageHandler(page + 1)} className={page < datafortrend.length /10? "" : "pagination__disable"}>▶</span>
                </div>
            </div>
        </div>

    );
}

export default Trending