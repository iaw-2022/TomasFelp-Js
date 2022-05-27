import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'


import { Link } from 'react-router-dom'

const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowBandsByGenre = () => {
    const [ bands, setBands] = useState([])
    const [ lastPage, setLastPage] = useState("")
    const [ search, setSearch] = useState("")
    
    let { genre } = useParams();

    useEffect(() => {
        getBands()
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? bands : bands.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))


    const getBands = async () => {
        const response = await axios.get(`${endpoint}/bands/filter?page=${pageNumber}&name_genre=${genre}`)
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

    return (
        <div className="container-md">
            <div>
                <h2 className="text-center">
                    Genres
                </h2>

                <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control mt-5 shadow-lg bg-dark text-white"/>
            </div>
           
           <div>
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">Name</th>
                        <th class="bg-black">Origin</th>
                        <th class="bg-black">Language</th>
                        <th class="bg-black">Year</th>
                    </thead>
                    <tbody>
                        {results.map((genre) => (
                            <tr key={genre.id}>
                                <td className="border border-0 rounded-end rounded-3">
                                    {genre.name}
                                </td>
                                <td className="border border-0 rounded-end rounded-3">
                                    {genre.origin}
                                </td>
                                <td className="border border-0 rounded-end rounded-3">
                                    {genre.idiom}
                                </td>
                                <td className="border border-0 rounded-end rounded-3">
                                    {genre.year}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <nav aria-label="Page navigation example">

                <button className="btn-dark" onClick={prevPage}>prev</button>
                <button className="btn-dark" onClick={nextPage}>next</button>

            </nav>
        
            
        </div>
        
        
    )
}

export default ShowBandsByGenre
