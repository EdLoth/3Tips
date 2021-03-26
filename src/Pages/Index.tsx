import React from 'react';
import Navbar from '../Components/NavBar';

import {Link} from 'react-router-dom'

import styles from '../Styles/Pages/Index.module.css'

export default function Index() {
    return (
        <>
            <Navbar />
            <div className={styles.containerIndex}>
                <div className="container">
                    <div className={styles.jumbotron}>
                        <h1 id={styles.titleIndex} className="display-4">Hello, world!</h1><br/><br/>
                        <p id={styles.textIndex} className="lead">Bem vindo(a)! a nossa plataforma de aprendizado, aqui voce aprende de forma descontraida e pratica.</p>
                        <hr className="my-4" />
                        <p id={styles.description}>Só é util o conhecimento que nos torna melhores - Sócrates</p>
                        <p className="lead">
                            <Link to="/Play" id={styles.buttonIndex} className="btn btn-lg" href="#" role="button">Play a Guest</Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}