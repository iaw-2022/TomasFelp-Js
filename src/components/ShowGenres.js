import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'


const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowGenres = () => {

    const [ genres, setGenres] = useState([])
    useEffect(() => {
        getAllGenres()
    }, [])

    const getAllGenres = async () => {
        const response = await axios.get(`${endpoint}/genres`)
        setGenres(response.data)
    }

    return (
        <div>
            <div>
                Genres
            </div>

            <table className='table table-striped'>
                <thead>
                    <th>Name</th>
                </thead>
                <tbody>
                    {genres.map((genre) => (
                        <tr key={genre.id}>
                            <td>
                                {genre.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        
    )
}

export default ShowGenres
