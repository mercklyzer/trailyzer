import React, { useEffect } from "react";
import {createPortal} from 'react-dom'
import {useFetch} from '../../hooks/useFetch'
import styles from './styles.module.css'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const API_KEY = 'api_key=f8428edb1d76821312efe3c8e4ed1995'

const getMovieUrl = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos?${API_KEY}&language=en-US`
}

const Modal = ({isShowModal, setShowModal, title, description, movieId, backdrop_path}) => {
    useEffect(() => {
        const bodyOverflowStyle = isShowModal? 'hidden' : 'scroll'
        document.body.style.overflow = bodyOverflowStyle
    }, [isShowModal])

    const movieData = useFetch(getMovieUrl(movieId, isShowModal), isShowModal)
    
    if(!isShowModal){
        return null
    }

    return createPortal(
        <>
            <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
            <div className={styles.modal}>
                {!movieData.loading && <>
                    <div className={styles.modalBackdrop} style={{backgroundImage: `url(${IMAGE_BASE_URL}${backdrop_path})`}}></div>
                    <div className={styles.modalBackdropFadeBottom}></div>
                    <div className={styles.modalContent}>
                        <div className={styles.movieTitle}>{title}</div>
                        <div className={styles.movieDescription}>{description}</div>
                        <h2>Trailers</h2>
                        <div className={styles.trailerContainer}>
                            {movieData.data.map(movie => {
                                return <iframe src={`https://www.youtube-nocookie.com/embed/${movie.key}`} allowFullScreen={true} />
                            })}
                            
                        </div>
                    </div>
                </>}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal