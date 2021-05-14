import React from 'react'
import FilmRow from './FilmRow'

function FilmListing(props) {
    return (
        <div className="filmlist">
            {props.films.films.map((film) => 
                <FilmRow film={film}/>
            )}
        </div>
    )
}

export default FilmListing