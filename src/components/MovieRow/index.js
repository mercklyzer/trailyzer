import React, { useEffect, useState } from "react"
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "../Modal";
import {useFetch} from '../../hooks/useFetch'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'



const MovieRow = props => {
    const movies = props.movies

    const swiperBreakpoints = {
        2000: {
            slidesPerView: props.large? 7 : 6,
            slidesPerGroup: props.large? 7 : 5,
        },
        1853: {
            slidesPerView: props.large? 8 : 5,
            slidesPerGroup: props.large? 7 : 4
        },
        1500: {
            slidesPerView: props.large? 7 : 5,
            slidesPerGroup: props.large? 6 : 4
        },
        1200: {
            slidesPerView: props.large? 6 : 5,
            slidesPerGroup: props.large? 5 : 4
        },
        950: {
            slidesPerView: props.large? 5 : 4,
            slidesPerGroup: props.large? 4 : 3
        },
        800: {
            slidesPerView: props.large? 4 : 4,
            slidesPerGroup: props.large? 3 : 3
        },
        600: {
            slidesPerView: props.large? 3 : 3,
            slidesPerGroup: props.large? 2 : 2
        },
        400: {
            slidesPerView: props.large? 2 : 3,
            slidesPerGroup: props.large? 2 : 2
        },
    }

    const MOVIE_DATA_URL = 'https://api.themoviedb.org/3/movie/585245/videos?api_key=f8428edb1d76821312efe3c8e4ed1995&language=en-US'

    const [aboveIndex, setAboveIndex] = useState(0)
    const [isShowModal, setShowModal] = useState(false)
    const [movieId, setMovieId] = useState('')
    const [videoKey, setVideoKey] = useState('')

    // useEffect(() => {
    //     setMovieId(movieId)

    //     if(movieId){
    //         fetch()
    //     }
    // }, [movieId])

    // const movieData = useFetch(MOVIE_DATA_URL)

    return (
        <>
            <div className={styles.row}>
                <h2>{props.title}</h2>
                <div className={styles.rowPosters}>
                    <Swiper
                        navigation={true}
                        slidesPerView={props.large? 2 : 3}
                        slidesPerGroup={2}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={swiperBreakpoints}
                        
                        >
                        {movies.map((movie, i) => {
                            const {id, title, overview, poster_path, backdrop_path} = movie
                            return <SwiperSlide 
                                className={styles.swiperSlide} 
                                key={i} 
                                style={{padding: '20px 0px', zIndex: i === aboveIndex? '999' : '0'}} 
                                onMouseOver={() => setAboveIndex(i)}
                                onClick={() => {setShowModal(true)}}
                            >
                                <img src={IMAGE_BASE_URL + poster_path} key={movie} alt="" className={`${styles.rowPoster} ${props.large? styles.rowPosterLarge : ''}`} />
                            </SwiperSlide>
                        })}

                    </Swiper>
                </div>
            </div>
        <Modal isShowModal={isShowModal} setShowModal={setShowModal}/>
        </>
    )
}

export default MovieRow