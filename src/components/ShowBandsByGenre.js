import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import PaginationButtons from './PaginationButtons'

import { Link } from 'react-router-dom'

const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowBandsByGenre = () => {
    const [ bands, setBands] = useState([])
    const [ lastPage, setLastPage] = useState("")
    const [ actualPage, setActualPage] = useState("")
    const [ name, setName] = useState("")
    const [ minYear, setMinYear] = useState("")
    const [ maxYear, setMaxYear] = useState("")
    const [ language, setLanguage] = useState("")
    const [ origin, setOrigin] = useState("")
    const [ languages, setLanguages] = useState([])
    const [ origins, setOrigins] = useState([])
    let { genre } = useParams();
    const [ genreFilter, setGenre] = useState(initGenre())
    var pageNumber = 1
    
    function initGenre(){
        if(genre=="filter"){
            return ""
        }else{
            return genre
        }
    }
    
    useEffect(() => {
        getBands()
    }, [])

    useEffect(() => {
        getOrigins()
    }, [])

    useEffect(() => {
        getLanguages()
    }, [])

    const getBands = async () => {
        const response = await axios.get(`${endpoint}/bands/filter?page=${pageNumber}&name_genre=${genreFilter}&name=${name}&origin=${origin}&idiom=${language}&minYear=${minYear}&maxYear=${maxYear}`)
        setBands(response.data.data)
        setLastPage(response.data.last_page)
        setActualPage(response.data.current_page)
    }

    const getOrigins = async () => {
        const response = await axios.get(`${endpoint}/bands/origins`)
        setOrigins(response.data)
    }

    const getLanguages = async () => {
        const response = await axios.get(`${endpoint}/bands/languages`)
        setLanguages(response.data)
    }


    const nextPage = () => {
        if(pageNumber<lastPage){
            pageNumber++
        }
        getBands()
    }

    const prevPage = () => {
        if(pageNumber>1){
            pageNumber--
        }
        getBands()
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeOrigin = (e) => {
        setOrigin(e.target.value)
    }

    const changeLanguage = (e) => {
        setLanguage(e.target.value)
    }

    const changeMinYear = (e) => {
        setMinYear(e.target.value)
    }

    const changeMaxYear = (e) => {
        setMaxYear(e.target.value)
    }  
    
    const changeGenre = (e) => {
        setGenre(e.target.value)
    }  

    let filterGenre
    if(genre=="filter"){
        filterGenre=<div className="p-1 d-inline-flex w-75">
                        <input value={genreFilter} onChange={changeGenre} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="filterGenre" placeholder="genre name" aria-label="Search"/>
                    </div>
        
    }


    let paginationButtons
    if(lastPage>1)
        paginationButtons=<PaginationButtons 
                                actualPage={actualPage}
                                lastPage={lastPage}
                                prevPage={prevPage}
                                nextPage={nextPage}
                            /> 
                            
                            
    const onFormSubmit = e => {
        e.preventDefault();
        getBands()
    }

    return (
        <div className="container-fluid opacity-75">

            <form onSubmit={onFormSubmit}>
                <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
                    <div className="container-md">
                        <div class="row align-items-center bg-dark">
                            <text className="col">Bands</text>
                            <input value={name} onChange={changeName} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="name" aria-label="Search"/>

                            <button class="col me-2 btn btn-outline-warning" action={getBands} type="submit" data-bs-target="#collapseExample" aria-expanded="false">
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
                            <input value={minYear} onChange={changeMinYear} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="number" name="min year" placeholder="since the year" aria-label="Search"/>
                            <input value={maxYear} onChange={changeMaxYear} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="number" name="max year" placeholder="until the year" aria-label="Search"/>
                        </div>


                        <div class="p-1 d-inline-flex form-floating  w-75">
                            <select class="form-select form-select-sm border-warning shadow-lg bg-dark text-white" onChange={changeOrigin} id="floatingSelect" aria-label="Floating label select example">
                                <option selected value="">Any</option>
                                {origins.map((origin) => (
                                    <option value={origin.origin}>{origin.origin}</option>
                                ))}
                            </select>
                            <label className="opacity-50 fs-6" for="floatingSelect">Origin</label>
                        </div>        

                        <div class="p-1 d-inline-flex form-floating  w-75">
                            <select class="form-select form-select-sm border-warning shadow-lg bg-dark text-white" onChange={changeLanguage} id="floatingSelect" aria-label="Floating label select example">
                                <option selected value="">Any</option>
                                {languages.map((language) => (
                                    <option value={language.idiom}>{language.idiom}</option>
                                ))}
                            </select>
                            <label className="opacity-50 fs-6" for="floatingSelect">Language</label>
                        </div>
                        {filterGenre}
                        
                    </div>
                </div>
            </form>

           <div className="min-vh-100 container-md">
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">Name</th>
                        <th class="bg-black">Origin</th>
                        <th class="bg-black">Language</th>
                        <th class="bg-black">Year</th>
                    </thead>
                    <tbody>
                        {bands.map((band) => (
                            <tr key={band.id}>
                                <td className="border-0">
                                <Link to={`/songs/${band.id}`} state={{ from: band }} className="link-warning">{band.name}</Link>
                                </td>
                                <td className="border-0">
                                    {band.origin}
                                </td>
                                <td className="border-0">
                                    {band.idiom}
                                </td>
                                <td className="border-0">
                                    {band.year}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {paginationButtons}
            
        </div>
        
        
    )
}

export default ShowBandsByGenre
