import React from 'react';

import {FaUserCircle, FaLock, FaEnvelopeOpenText, FaBirthdayCake} from 'react-icons/fa'

//importando estilizações utilizadas na pagina
import styles from '../Styles/Pages/Login.module.css';

import people from '../assets/people.gif'

export default function Login() {
    return(
        <>
        <div className={styles.contentLogin}>
            <div className={styles.containerLogin} id={styles.containerLogin}>
                    <div id={styles.leftPanel} className="col-7">
                        <h1 id={styles.titleLogin}>O aprendizado é continuo<br/> e sempre havera um próximo nível.</h1>
                        <img src={people} alt="people"/>
                    </div>
                    <div id={styles.rigthPanel} className="col-5">
                    <form>
                        <div className={styles.inputBody}>
                        <label><FaUserCircle id={styles.iconLogin}/></label>
                        <input type="text" name="username" id={styles.inputFix} placeholder="Username"/>
                        </div>
                        <div className={styles.inputBody}>
                        <label><FaEnvelopeOpenText id={styles.iconLogin}/></label>
                        <input type="text" name="email" id={styles.inputFix} placeholder="E-mail"/>
                        </div>
                        <div className={styles.inputBody}>
                        <label><FaLock id={styles.iconLogin}/></label>
                        <input type="text" name="password" id={styles.inputFix} placeholder="Password"/>
                        </div>
                        <div className={styles.inputBody}>
                        <label><FaBirthdayCake id={styles.iconLogin}/></label>
                        <input type="text" name="text" id={styles.inputFix} placeholder="Date Birthday"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}