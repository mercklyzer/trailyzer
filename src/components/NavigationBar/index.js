import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import SearchIcon from '@material-ui/icons/Search';

const NavigationBar = ({query, setQuery}) => {
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
            <div className={styles.rightContainer}>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}> 
                    <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <SearchIcon style={{fill: 'white', cursor: 'pointer'}} />

                </form>
                <img src={require('../../images/netflix-avatar.png')} className={styles.navAvatar} />
            </div>

        </div>
    )
}

export default NavigationBar