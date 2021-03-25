import React from 'react';

import { FaUserCircle, FaLock, FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaCodepen, FaArrowLeft } from 'react-icons/fa'

//importando estilizações utilizadas na pagina
import styles from '../Styles/Pages/Login.module.css';

import people from '../assets/people.gif'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className={styles.contentLogin}>
                <div className={styles.containerLogin} id={styles.containerLogin}>
                    <div id={styles.leftPanel} className="col-7">
                        <Link to="/index" id={styles.buttonReturn}><FaArrowLeft id={styles.iconButton}/> Retornar</Link><br/><br/>
                        <h1 id={styles.titleLogin}>O aprendizado é continuo<br /> e sempre havera um próximo nível.</h1>
                        <img src={people} alt="people" />
                    </div>
                    <div id={styles.rigthPanel} className="col-5">
                        <br/><br/><br/><br/>
                        <h1 id={styles.titleRight}><span>3Tips</span></h1>
                        <br/>
                        <form>
                            <div className={styles.inputBody}>
                                <label><FaUserCircle id={styles.iconLogin} /></label>
                                <input type="text" name="username" id={styles.inputFix} placeholder="Username or E-mail" />
                            </div>
                            <div className={styles.inputBody}>
                                <label><FaLock id={styles.iconLogin} /></label>
                                <input type="text" name="password" id={styles.inputFix} placeholder="Password" />
                            </div>
    
                            <br/><br/>
                            <div className="groupButton">
                            <button id={styles.buttonRegister}>LOGON</button>
                            <Link to="/Register" id={styles.buttonRegister}>CRIAR CONTA</Link>
                            </div>
                            
                        </form>
                            <br/><br/>
                        <div className="row">
                            <ul className={styles.flexContainer}>
                                <li className={styles.twitter}><Link to="/"><FaTwitter id={styles.iconLogin} role="button" /></Link></li>
                                <li className={styles.facebook}><Link to="/"><FaFacebook id={styles.iconLogin} role="button" /></Link></li>
                                <li className={styles.linkedin}><Link to="/"><FaLinkedin id={styles.iconLogin} role="button" /></Link></li>
                                <li className={styles.codepen}><Link to="/"><FaCodepen id={styles.iconLogin} role="button" /></Link></li>
                                <li className={styles.dribbble}><Link to="/"><FaGithub id={styles.iconLogin} role="button" /></Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}