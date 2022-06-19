import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PaginationButtons from './PaginationButtons'
import FilterSongs from './FilterSongs'
import SongCardSimple from './SongCardSimple'

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

    const onFormSubmit = e => {
        e.preventDefault();
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

            <FilterSongs 
                    onFormSubmit={onFormSubmit}
                    name={name}
                    changeName={changeName}
                    getSongs={getSongs}
                    releaseDateAfter={releaseDateAfter}
                    changeReleaseDateAfter={changeReleaseDateAfter}
                    releaseDateBefore={releaseDateBefore}
                    changeReleaseDateBefore={changeReleaseDateBefore}
                    genre={genre}
                    changeGenre={changeGenre}
                    band={band}
                    changeBand={changeBand}
                    album={album}
                    changeAlbum={changeAlbum}

            />

            <div className="min-vh-100 container-md">
                <div class="row row-cols-1 row-cols-md-2 gx-2 pb-5">
                        {songs.map((song) => (
                            <div className="col">
                                <SongCardSimple song={song}/>
                            </div>    
                        ))}
                </div>
            </div>
            
            {paginationButtons}

        </div>
        
        
    )
}

export default ShowSongs
