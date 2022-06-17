import React from 'react'

const SimpleTextFilter = (props) => {
    return (
        <form onSubmit={props.onFormSubmit} class="row align-items-center bg-dark">
            <text className="col">{props.text}</text>
            <input value={props.search} onChange={props.searcher} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="Filter" aria-label="Search"/>
            <button class="col me-2 btn btn-outline-warning" type="button" onClick={props.update} data-bs-target="#collapseExample" aria-expanded="false">
                Search
            </button>
        </form>
    )
}

export default SimpleTextFilter
