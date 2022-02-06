import React, { useEffect, useState } from "react";
import styles from './styles.module.css'

const NavigationBar = props => {
    const [animateNav, setAnimateNav] = useState(false)

    useEffect(() => {
        const onScroll = (event) => {
            if(window.scrollY >= 100){
                setAnimateNav(true)
            }
            else{
                setAnimateNav(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener(onScroll)
    }, [])

    return (
        <div className={`${styles.nav} ${animateNav? styles.navBlack : ''}`}>
            <img src={require('../../images/trailyzer-logo.png')} className={styles.navLogo} />
            <img src={require('../../images/netflix-avatar.png')} className={styles.navAvatar} />

        </div>
    )
}

export default NavigationBar