import React from 'react'

const FilterSongs = (props) => {
    return (
        <form onSubmit={props.onFormSubmit}>
            <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
                <div className="container-md">
                    <div class="row align-items-center bg-dark">
                        <text className="col">Bands</text>
                        <input value={props.name} onChange={props.changeName} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="name" aria-label="Search"/>

                        <button class="col me-2 btn btn-outline-warning" type="submit" onClick={props.getSongs} data-bs-target="#collapseExample" aria-expanded="false">
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
                        <div class="p-1 d-inline-flex form-floating  w-75">
                                <input value={props.releaseDateAfter} onChange={props.changeReleaseDateAfter} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="date" name="max year" placeholder="after the date" id="floatingSelect" aria-label="Search"/>
                                <label className="opacity-50 fs-6" for="floatingSelect">After</label>
                            </div>   
                            <div class="p-1 d-inline-flex form-floating  w-75">
                                <input value={props.releaseDateBefore} onChange={props.changeReleaseDateBefore} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="date" name="max year" placeholder="until the date" id="floatingSelect" aria-label="Search"/>
                                <label className="opacity-50 fs-6" for="floatingSelect">Before</label>
                            </div>   
                        </div>

                        


                        <div class="p-1 d-inline-flex w-75">
                            <input value={props.genre} onChange={props.changeGenre} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="genre" placeholder="genre" aria-label="Search"/>
                        </div>        

                        <div class="p-1 d-inline-flex w-75">
                            <input value={props.band} onChange={props.changeBand} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="band" placeholder="band" aria-label="Search"/>
                        </div>

                        <div class="p-1 d-inline-flex w-75">
                            <input value={props.album} onChange={props.changeAlbum} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="album" placeholder="album" aria-label="Search"/>
                        </div>

                        
                    </div>
                </div>
        </form>
    )
}

export default FilterSongs
