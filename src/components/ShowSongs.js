import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PaginationButtons from './PaginationButtons'

import { Link } from 'react-router-dom'

const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowSongs = () => {
    const [ songs, setSongs] = useState([])
    const [ band, setBand] = useState("")
    const [ album, setAlbum] = useState("")
    const [ name, setName] = useState("")
    const [ releaseDateAfter, setReleaseDateAfter] = useState("")
    const [ releaseDateBefore, setReleaseDateBefore] = useState("")
    const [ genre, setGenre] = useState("")
    const [ lastPage, setLastPage] = useState("")
    const [ actualPage, setActualPage] = useState("")
    var pageNumber=1
    var disableNext=false


    useEffect(() => {
        getSongs()
    }, [])

    const getSongs = async () => {
        console.log("buscando canciones")
        const response = await axios.get(`${endpoint}/songs/filters?name=${name}&album=${album}&releaseDateAfter=${releaseDateAfter}&releaseDateBefore=${releaseDateBefore}&genre=${genre}&band=${band}&page=${pageNumber}`)
        setSongs(response.data.data)
        setLastPage(response.data.last_page)
        setActualPage(response.data.current_page)
    }

    const changeName = (e) => {
        setName(e.target.value)
    } 

    const changeGenre = (e) => {
        setGenre(e.target.value)
    } 

    const changeAlbum = (e) => {
        setAlbum(e.target.value)
    } 

    const changeBand = (e) => {
        setBand(e.target.value)
    } 

    const changeReleaseDateAfter = (e) => {
        setReleaseDateAfter(e.target.value)
    } 

    const changeReleaseDateBefore = (e) => {
        setReleaseDateBefore(e.target.value)
    } 

    const nextPage = () => {
        console.log("p n - : pn",pageNumber," - lp",lastPage)
        if(pageNumber<lastPage){
            pageNumber=pageNumber+1
            console.log("p n: ",pageNumber)
        }else{
            disableNext=true
        }
        getSongs()
    }

    const prevPage = () => {
        console.log("p n - : pn",pageNumber," - fp",1)
        if(pageNumber>1){
            pageNumber--
            console.log("p p: ",pageNumber)
        }
        getSongs()
    }

    

    let paginationButtons
    if(lastPage>1)
        paginationButtons=<PaginationButtons 
                                actualPage={actualPage}
                                lastPage={lastPage}
                                prevPage={prevPage}
                                nextPage={nextPage}
                            />        

    return (
        <div className="container-fluid opacity-75">

        <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
            <div className="container-md">
                <form class="row align-items-center bg-dark" action="" method="GET">
                    <text className="col">Bands</text>
                    <input value={name} onChange={changeName} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="name" aria-label="Search"/>

                    <button class="col me-2 btn btn-outline-warning" type="button" onClick={getSongs} data-bs-target="#collapseExample" aria-expanded="false">
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
                    <div class="p-1 d-inline-flex form-floating  w-75">
                            <input value={releaseDateAfter} onChange={changeReleaseDateAfter} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="date" name="max year" placeholder="after the date" id="floatingSelect" aria-label="Search"/>
                            <label className="opacity-50 fs-6" for="floatingSelect">After</label>
                        </div>   
                        <div class="p-1 d-inline-flex form-floating  w-75">
                            <input value={releaseDateBefore} onChange={changeReleaseDateBefore} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="date" name="max year" placeholder="until the date" id="floatingSelect" aria-label="Search"/>
                            <label className="opacity-50 fs-6" for="floatingSelect">Before</label>
                        </div>   
                    </div>

                    


                    <div class="p-1 d-inline-flex w-75">
                        <input value={genre} onChange={changeGenre} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="genre" placeholder="genre" aria-label="Search"/>
                    </div>        

                    <div class="p-1 d-inline-flex w-75">
                        <input value={band} onChange={changeBand} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="band" placeholder="band" aria-label="Search"/>
                    </div>

                    <div class="p-1 d-inline-flex w-75">
                        <input value={album} onChange={changeAlbum} className="form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="album" placeholder="album" aria-label="Search"/>
                    </div>

                    
                </div>
            </div>

            <div className="min-vh-100 container-md">
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">name</th>
                        <th class="bg-black">album</th>
                        <th class="bg-black">release date</th>
                    </thead>
                    <tbody>
                        {songs.map((song) => (
                            <tr key={song.id}>
                                <td className="border-0">
                                <Link to={`/song/${song.name}`} state={{ from: song }} className="link-warning">{song.name}</Link>
                                </td>
                                <td className="border-0">
                                    {song.album}
                                </td>
                                <td className="border-0">
                                    {song.release_date}
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

export default ShowSongs
