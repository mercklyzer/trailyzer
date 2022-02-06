import React from "react"
import styles from './styles.module.css'

const Banner = props => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContents}>
                <h1 className={styles.bannerTitle}>Money Heist</h1>
                <div className={styles.bannerButtons}>
                    <button className={styles.bannerButton}>Play</button>
                    <button className={styles.bannerButton}>My List</button>
                </div>

                <div className={styles.bannerDescription}>
                    To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: n...
                </div>
            </div>
            <div className={styles.bannerFadeBottom}></div>
        </div>
    )
}

export default Banner