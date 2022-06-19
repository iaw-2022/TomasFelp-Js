import React from 'react'

import { Link } from 'react-router-dom'

const SongCardSimple = (props) => {
    return (
        <div class="card bg-dark mt-5">
            <div class="card-body">
                <h5 class="card-title fs-f4 text-center"><Link to={`/song/${props.song.name}`} state={{ from: props.song }} className="link-warning">{props.song.name}</Link></h5>

                <div class="text-start">
                    <text class="mb-2 fs-5 text-muted">Album: </text>
                    <text class="fs-4">{props.song.album}</text>
                </div>

                <div class="text-start">
                    <text class="mb-2 fs-5 text-muted">Release date: </text>
                    <text class="fs-4">{props.song.release_date}</text>
                </div>

            </div>
        </div>
    )
}

export default SongCardSimple
