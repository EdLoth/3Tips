import React from 'react';
import {Link} from 'react-router-dom'

import styles from '../../Styles/tips/tips.module.css'

export default function Tip1(){
    return(
        <div className={styles.contentPlaygame}>
            <br/><br/><br/>
            <h1 id={styles.questionTittle}>Pergunta 6: Tema Código de barras.  </h1>
            <br/><br/>
            <div className={styles.questionBox}>
                <p id="textQuestion">Primeira dica: Representação gráfica de dados.</p>
            </div><br/>
            <div className={styles.questionBox}>
                <p id="textQuestion">Segunda dica: Realizada por scanner.  </p>
            </div><br/>
            <div className={styles.questionBox}>
                <p id="textQuestion">Terceira dica: Tem nos produtos.  </p>
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