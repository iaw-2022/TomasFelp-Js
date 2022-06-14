import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
       

    return (
        <div className="container-fluid">

            <div className="navbar justify-content-center navbar-dark bg-dark container-fluid opacity-75 shadow">
                <div className="container-md">
                    <div className="d-flex">
                        <Link class="nav-link" to="/">Home</Link>
                        <Link class="nav-link" to="/genres">Genres</Link>
                        <Link class="nav-link" to="/bands/filter">Bands</Link>
                        <Link class="nav-link" to="/songs/filter">Songs</Link>
                    </div>
                </div>
            </div>
            
        </div>
        
        
    )
}

export default NavBar