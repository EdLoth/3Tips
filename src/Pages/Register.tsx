import React from 'react';


import { FaUserCircle, FaLock, FaEnvelopeOpenText, FaBirthdayCake, FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaCodepen, FaArrowLeft } from 'react-icons/fa'

//importando estilizações utilizadas na pagina
import styles from '../Styles/Pages/Login.module.css';

import people from '../assets/people.gif'
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <div className={styles.contentLogin}>
                <div className={styles.containerLogin} id={styles.containerLogin}>
                    <div id={styles.leftPanel} className="col-7">
                        <Link to="/index" id={styles.buttonReturn}><FaArrowLeft id={styles.iconButton} /> Retornar</Link><br /><br />
                        <h1 id={styles.titleLogin}>O aprendizado é continuo<br /> e sempre havera um próximo nível.</h1>
                        <img src={people} alt="people" />
                    </div>


                    <div id={styles.rigthPanel} className="col-5">
                        <br />
                        <h1 id={styles.titleRight}><span>3Tips</span></h1>
                        <br />
                        <form>
                            <div className={styles.inputBody}>
                                <label><FaUserCircle id={styles.iconLogin} /></label>
                                <input type="text" name="username" id={styles.inputFix} placeholder="Username" />
                            </div>
                            <div className={styles.inputBody}>
                                <label><FaEnvelopeOpenText id={styles.iconLogin} /></label>
                                <input type="text" name="email" id={styles.inputFix} placeholder="E-mail" />
                            </div>
                            <div className={styles.inputBody}>
                                <label><FaLock id={styles.iconLogin} /></label>
                                <input type="text" name="password" id={styles.inputFix} placeholder="Password" />
                            </div>
                            <div className={styles.inputBody}>
                                <label><FaBirthdayCake id={styles.iconLogin} /></label>
                                <input type="text" name="text" id={styles.inputFix} placeholder="Date Birthday" />
                            </div>
                            <br />
                            <div className="groupButton">
                                <button id={styles.buttonRegister}>Registrar</button>
                                <Link to="/Login" id={styles.buttonRegister}>Tenho Conta</Link>
                            </div>
                        </form>

                        <br />
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