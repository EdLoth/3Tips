import React from 'react';

import styles from '../Styles/Home.module.css'


//importando assets utilizados na pagina
import tres from "../assets/3_2.gif"
export default function Home() {
    return(
        <div className={styles.containerHome}>
            <div className={styles.titleTips}>
                <img src={tres} alt=""/>
                <h1>Home page</h1>
            </div>
        </div>
    )
}