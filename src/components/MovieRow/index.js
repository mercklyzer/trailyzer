import React, { useEffect, useState } from "react"
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "../Modal";
import Movie from "../Movie";

const swiperBreakpoints = props => {
    return {
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
        }
    }
}

const MovieRow = props => {
    const movies = props.movies
    const [aboveIndex, setAboveIndex] = useState(0)

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
                        breakpoints={swiperBreakpoints(props)}   
                    >
                        {movies.map((movie, i) => {
                            const {id, title, overview, poster_path, backdrop_path} = movie
                            return <Movie 
                                key={i}
                                
                                movieId={id}
                                title={title}
                                description={overview}
                                poster_path={poster_path}
                                backdrop_path={backdrop_path}
                                
                                large={props.large}
                                index={i}
                                aboveIndex={aboveIndex}
                                setAboveIndex={setAboveIndex}
                            />
                        })}

                    </Swiper>
                </div>
            </div>
        {/* <Modal isShowModal={isShowModal} setShowModal={setShowModal}/> */}
        </>
    )
}

export default MovieRow