import React from 'react';

import {Link} from 'react-router-dom';

import styles from '../Styles/Pages/Home.module.css'


//importando assets utilizados na pagina


export default function Home() {
    return (
        <>
            <div className={styles.containerHome}>
                <div className={styles.titleTips}>
                    <h1 id={styles.tresTitle}><span>Jogo das 3 DICAS</span></h1>
                </div>
                <div className={styles.groupItems}>
                    <Link className={styles.buttonStart} to="/index">
                        <h1>START YOUR GAME</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}