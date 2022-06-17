import React from 'react'

const FilterBands = (props) => {

    let filterGenre
    if(props.filterByGenreName==true){
        filterGenre=<div className="p-1 d-inline-flex w-75">
                        <input value={props.genreFilter} onChange={props.changeGenre} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="filterGenre" placeholder="genre name" aria-label="Search"/>
                    </div>
        
    }

    return (
        <form onSubmit={props.onFormSubmit}>
            <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
                <div className="container-md">
                    <div class="row align-items-center bg-dark">
                        <text className="col">Bands</text>
                        <input value={props.name} onChange={props.changeName} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="name" aria-label="Search"/>

                        <button class="col me-2 btn btn-outline-warning" action={props.getBands} type="submit" data-bs-target="#collapseExample" aria-expanded="false">
                            Search
                        </button>

                        <button class="col btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Filters
                        </button>

                    </div>
                </div>

            </div> 

            <div class="collapse bg-dark" id="collapseExample">
            
                <div className="flex-lg-column p-2">
                    <div className="p-1 d-inline-flex w-75">
                        <input value={props.minYear} onChange={props.changeMinYear} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="number" name="min year" placeholder="since the year" aria-label="Search"/>
                        <input value={props.maxYear} onChange={props.changeMaxYear} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="number" name="max year" placeholder="until the year" aria-label="Search"/>
                    </div>


                    <div class="p-1 d-inline-flex form-floating  w-75">
                        <select class="form-select form-select-sm border-warning shadow-lg bg-dark text-white" onChange={props.changeOrigin} id="floatingSelect" aria-label="Floating label select example">
                            <option selected value="">Any</option>
                            {props.origins.map((origin) => (
                                <option value={origin.origin}>{origin.origin}</option>
                            ))}
                        </select>
                        <label className="opacity-50 fs-6" for="floatingSelect">Origin</label>
                    </div>        

                    <div class="p-1 d-inline-flex form-floating  w-75">
                        <select class="form-select form-select-sm border-warning shadow-lg bg-dark text-white" onChange={props.changeLanguage} id="floatingSelect" aria-label="Floating label select example">
                            <option selected value="">Any</option>
                            {props.languages.map((language) => (
                                <option value={language.idiom}>{language.idiom}</option>
                            ))}
                        </select>
                        <label className="opacity-50 fs-6" for="floatingSelect">Language</label>
                    </div>
                    {filterGenre}
                    
                </div>
            </div>
        </form>
    )
}

export default FilterBands
