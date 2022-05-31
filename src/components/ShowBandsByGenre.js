import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'


import { Link } from 'react-router-dom'

const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowBandsByGenre = () => {
    const [ bands, setBands] = useState([])
    const [ lastPage, setLastPage] = useState("")
    const [ name, setName] = useState("")
    const [ minYear, setMinYear] = useState("")
    const [ maxYear, setMaxYear] = useState("")
    const [ language, setLanguage] = useState("")
    const [ origin, setOrigin] = useState("")
    let { genre } = useParams();
    const [ genreFilter, setGenre] = useState(initGenre())

    
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

    const getBands = async () => {
        const response = await axios.get(`${endpoint}/bands/filter?page=${pageNumber}&name_genre=${genreFilter}&name=${name}&origin=${origin}&idiom=${language}&minYear=${minYear}&maxYear=${maxYear}`)
        setBands(response.data.data)
        setLastPage(response.data.last_page)
    }

    const [ pageNumber, setPageNumber] = useState(window.localStorage.getItem('pageNumber'))

    useEffect(() => {
        setPageNumber(JSON.parse(window.localStorage.getItem('pageNumber')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('pageNumber', pageNumber);
    }, [pageNumber]);

    const nextPage = () => {
        if(pageNumber<lastPage){
            setPageNumber(pageNumber+1)
            getBands()
        }
    }

    const prevPage = () => {
        if(pageNumber>1){
            setPageNumber(pageNumber-1)
            getBands()
        }
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

        

    return (
        <div className="container-fluid opacity-75">

            <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
            <div className="container-md">
                <form class="row align-items-center bg-dark" action="" method="GET">
                    <text className="col">Bands</text>
                    <input value={name} onChange={changeName} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="name" aria-label="Search"/>

                    <button class="col me-2 btn btn-outline-warning" type="button" onClick={getBands} data-bs-target="#collapseExample" aria-expanded="false">
                        Search
                    </button>

                    <button class="col btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filters
                    </button>

                </form>
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
                            <option value="United States">United States</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Spain">Spain</option>
                            <option value="Nederland">Nederland</option>
                        </select>
                        <label className="opacity-50 fs-6" for="floatingSelect">Origin</label>
                    </div>        

                    <div class="p-1 d-inline-flex form-floating  w-75">
                        <select class="form-select form-select-sm border-warning shadow-lg bg-dark text-white" onChange={changeLanguage} id="floatingSelect" aria-label="Floating label select example">
                            <option selected value="">Any</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="German">German</option>
                        </select>
                        <label className="opacity-50 fs-6" for="floatingSelect">Language</label>
                    </div>
                       {filterGenre}
                    
                </div>
            </div>

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
            
        </div>
        
        
    )
}

export default ShowBandsByGenre
