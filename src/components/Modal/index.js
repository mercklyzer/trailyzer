import React, { useEffect } from "react";
import {createPortal} from 'react-dom'
import styles from './styles.module.css'

const Modal = ({isShowModal, setShowModal, title, description, videoKey}) => {
    useEffect(() => {
        const bodyOverflowStyle = isShowModal? 'hidden' : 'scroll'
        document.body.style.overflow = bodyOverflowStyle
    }, [isShowModal])

    if(!isShowModal){
        return null
    }

    return createPortal(
        <>
            <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
            <div className={styles.modal}>
                <div className={styles.modalBackdrop}></div>
                <div className={styles.modalBackdropFadeBottom}></div>
                <div className={styles.modalContent}>
                    <div className={styles.movieTitle}>Redford</div>
                    <div className={styles.movieDescription}>Description Description Description Description Description Description</div>
                    <h2>Trailers</h2>
                    <div className={styles.trailerContainer}>
                        <iframe src={'https://www.youtube-nocookie.com/embed/o9ri5DYLvkU'} allowFullScreen={true} />
                        <iframe src={'https://www.youtube-nocookie.com/embed/a'} />
                        <iframe src={'https://www.youtube-nocookie.com/embed/a'} />
                        <iframe src={'https://www.youtube-nocookie.com/embed/a'} />
                        <iframe src={'https://www.youtube-nocookie.com/embed/a'} />
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal