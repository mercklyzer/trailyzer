import React, { useContext, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import Modal from "../Modal";
import styles from './styles.module.css'
import { ModalContext } from "../ModalContext";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const Movie = ({large, index, aboveIndex, setAboveIndex, movieId, title, description, poster_path, backdrop_path}) => {
    const {setModalData} = useContext(ModalContext)

    return (
    <>
        <SwiperSlide 
            style={{padding: '20px 0px', zIndex: index === aboveIndex? '999' : '0'}} 
            onMouseOver={() => setAboveIndex(index)}
            >
            <img src={IMAGE_BASE_URL + poster_path} alt="" onClick={() => {
                setModalData({
                    isShowModal: true,
                    movieId,
                    title,
                    description,
                    backdrop_path
                })
            }} 
            className={`${styles.rowPoster} ${large? styles.rowPosterLarge : ''}`} />
        </SwiperSlide>
    </>)
}

// this solves the bug when putting the SwiperSlide in a separate component by letting Swiper think that SwiperSlide is its direct children.
Movie.displayName = 'SwiperSlide'

export default Movie