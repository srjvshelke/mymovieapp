import React from 'react'

function Pagination({datafortrend,page,setPage}) {
    const selectPageHandler = (selectedPage) => {
        let length = datafortrend.length % 10 == 0 ? datafortrend.length / 10 : Math.floor(datafortrend.length / 10) + 1

        if (selectedPage >= 1 && selectedPage <= length && selectedPage !== page) {
            setPage(selectedPage)
        }
    }
    return (
        <div class="pagination">
            <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
            {
                [...Array(datafortrend.length % 10 == 0 ? datafortrend.length / 10 : Math.floor(datafortrend.length / 10) + 1)].map((ele, i) => {
                    return <span key={i} onClick={() => selectPageHandler(i + 1)} className={page === i + 1 ? "pagination__selected" : ""}  >{i + 1}</span>
                })
            }
            <span onClick={() => selectPageHandler(page + 1)} className={page < datafortrend.length / 10 ? "" : "pagination__disable"}>▶</span>
        </div>
    )
}

export default Pagination