import React from 'react';
import styles from '../Styles/Pages/Play.module.css';
import tips from '../tips.json'

export default function Play() {
    return(
        <div className={styles.containerPlay}>
           <div className="container">
               <h1>3 Dicas</h1>
               <div className="questionContent">
                   <p></p>
               </div>
               <div className="questionContent">
                   dica 2 bla bla bla
               </div>
               <div className="questionContent">
                   dica 3 bla bla bla
               </div>
               <div className="buttonGroup">
                   <button>+1 Dica</button>
                   <button>Correto</button>
               </div>
           </div>
        </div>
    )
}