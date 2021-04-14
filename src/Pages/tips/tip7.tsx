import React from 'react';
import {Link} from 'react-router-dom'

import styles from '../../Styles/tips/tips.module.css'

export default function Tip1(){
    return(
        <div className={styles.contentPlaygame}>
            <br/><br/><br/>
            <h1 id={styles.questionTittle}>Pergunta 7: Tema Conferências.  </h1>
            <br/><br/>
            <div className={styles.questionBox}>
                <p id="textQuestion">Primeira dica:  Verificar os produtos.  </p>
            </div><br/>
            <div className={styles.questionBox}>
                <p id="textQuestion">Segunda dica:  Integridade. </p>
            </div><br/>
            <div className={styles.questionBox}>
                <p id="textQuestion">Terceira dica: Tipo de confêrencia. </p>
            </div>
            <br/><br/>
            <div className={styles.displayButtons}>
                <div className={styles.buttonIncorret}>
                <Link id={styles.btnStar} to="/play">Errou</Link>
                </div>
                <div className={styles.buttonCorrect}>
                <Link id={styles.btnStur} to="/play">Acertou</Link>
                </div>
            </div>
            <hr/>
        </div>
        
    );
}