import React, { useState } from "react"
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

  
const MovieRow = props => {
    const movies = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8].map((number) => `images/${props.large? 'large':'small'}-movie${number}.jpg`)
    const [aboveIndex, setAboveIndex] = useState(0)

    return (
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
                    breakpoints={{
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
                    }}
                    
                    >
                    {movies.map((movie, i) => <SwiperSlide className={styles.swiperSlide} key={i} style={{padding: '20px 0px', zIndex: i === aboveIndex? '999' : '0'}} onMouseOver={() => setAboveIndex(i)}>
                        <img src={require("../../" + movie)} key={movie} alt="" className={`${styles.rowPoster} ${props.large? styles.rowPosterLarge : ''}`} />
                    </SwiperSlide>)}

                </Swiper>
            </div>
        </div>
    )
}

export default MovieRow