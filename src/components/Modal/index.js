import React, { useEffect, useState } from "react";
import {createPortal} from 'react-dom'
import {useFetch} from '../../hooks/useFetch'
import styles from './styles.module.css'
import CloseIcon from '@material-ui/icons/Close';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const API_KEY = 'api_key=f8428edb1d76821312efe3c8e4ed1995'

const getMovieUrl = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/videos?${API_KEY}&language=en-US`
}

const Modal = ({isShowModal, setShowModal, title, description, movieId, backdrop_path}) => {
    useEffect(() => {
        const bodyOverflowStyle = isShowModal? 'hidden' : 'scroll'
        document.body.style.overflowY = bodyOverflowStyle
    }, [isShowModal])

    const movieData = useFetch(getMovieUrl(movieId, isShowModal), isShowModal)

    const [showIframe, setShowIframe] = useState(false)
    
    

    return createPortal(
        <>
            <div className={`${styles.overlay} ${isShowModal? styles.active: ''}`} onClick={() => setShowModal(false)}></div>
            <div className={`${styles.modal} ${isShowModal? styles.active: ''}`}>
                <div className={styles.closeButton} onClick={() => setShowModal(false)}>
                    <CloseIcon />
                </div>
                {!movieData.loading && <>
                    <div className={styles.modalBackdrop} style={{backgroundImage: `url(${IMAGE_BASE_URL}${backdrop_path})`}}></div>
                    <div className={styles.modalBackdropFadeBottom}></div>
                    <div className={styles.modalContent}>
                        <div className={styles.movieTitle}>{title}</div>
                        <div className={styles.movieDescription}>{description}</div>
                        <h2>Trailers</h2>
                        {movieData.data.length === 0 && <div>No trailers available.</div>}
                        {movieData.data && <div className={styles.trailerContainer}>
                            {movieData.data && !showIframe && <div className={styles.loaderContainer}><img src={require('../../images/loader.gif')}/></div>}
                            {movieData.data.map(movie => {
                                return <iframe key={movie.key} 
                                src={`https://www.youtube.com/embed/${movie.key}`} 
                                onLoad={() => setShowIframe(true)} //by testing, iFrames load at the same time. Thus, 1 state is sufficient
                                allowFullScreen={true} 
                                style={{opacity: `${showIframe? 1 : 0}`}}
                                />
                            })}
                        </div>}
                    </div>
                </>}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal