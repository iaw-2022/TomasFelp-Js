import React from 'react'

function PaginationButtons(props) {
    return (
        <nav aria-label="Page navigation example">
            <button className="btn-dark" disabled={props.actualPage<=1} onClick={props.prevPage}>prev</button>
            <button className="btn-dark" disabled={props.actualPage>=props.lastPage} onClick={props.nextPage}>next</button>
            <p>{props.actualPage}/{props.lastPage}</p>
        </nav>  
    )
}

export default PaginationButtons
