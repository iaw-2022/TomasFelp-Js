import React from 'react'

import { Link } from 'react-router-dom'

const BandCard = (props) => {
    return (
        <div class="card bg-dark mt-5">
            <div class="card-body">
                <h5 class="card-title fs-f4 text-center"><Link to={`/songs/${props.band.id}`} state={{ from: props.band }} className="link-warning">{props.band.name}</Link></h5>
                <div class="text-start">
                    <text class="mb-2 fs-5 text-muted">Origin: </text>
                    <text class="fs-4">{props.band.origin}</text>
                </div>

                <div class="text-start">
                    <text class="mb-2 fs-5 text-muted">Language: </text>
                    <text class="fs-4">{props.band.idiom}</text>
                </div>

                <div class="text-start">
                    <text class="mb-2 fs-5 text-muted">Year: </text>
                    <text class="fs-4">{props.band.year}</text>
                </div>

            </div>
        </div>
    )
}

export default BandCard
