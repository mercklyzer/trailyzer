import React from "react"
import styles from './styles.module.css'


const MovieRow = props => {
    const movies = [1,2,3,4,5,6,7,8].map((number) => `images/${props.large? 'large':'small'}-movie${number}.jpg`)


    return (
        <div className={styles.row}>
            <h2>{props.title}</h2>
            <div className={styles.rowPosters}>
                {movies.map(movie => <img src={require("../../" + movie)} key={movie} alt="" className={`${styles.rowPoster} ${props.large? styles.rowPosterLarge : ''}`} />)}
            </div>
        </div>
    )
}

export default MovieRow