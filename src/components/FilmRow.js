import React from 'react'
import FilmPoster from './FilmPoster'

function FilmRow(props) {
    const releaseDate = new Date(props.film.release_date)
    
    return (
    <div className="film-row">
        <FilmPoster film={props}/>

        <div className="film-summary">
            <h1>{props.film.title}</h1>
            <p>{releaseDate.getFullYear()}</p>
        </div>
    </div>
    )
}

export default FilmRow