import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import PaginationButtons from './PaginationButtons'
import FilterBands from './FilterBands'
import BandCard from './BandCard'

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

           <FilterBands filterByGenreName={genre=="filter"}
                        genreFilter={genreFilter}
                        changeGenre={changeGenre}
                        onFormSubmit={onFormSubmit}
                        name={name}
                        changeName={changeName}
                        getBands={getBands}
                        minYear={minYear}
                        changeMinYear={changeMinYear}
                        maxYear={maxYear}
                        changeMaxYear={changeMaxYear}
                        changeOrigin={changeOrigin}
                        origins={origins}
                        changeLanguage={changeLanguage}
                        languages={languages}
           />

           <div className="min-vh-100 container-md">
                <div class="row row-cols-1 row-cols-md-3 gx-2 pb-5">
                    {bands.map((band) => (
                        <div className="col">
                            <BandCard band={band}/>
                        </div>    
                    ))}

                </div>
            </div>

            {paginationButtons}
            
        </div>
        
        
    )
}

export default ShowBandsByGenre
