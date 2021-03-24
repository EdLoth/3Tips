import React from 'react';
import { Link } from 'react-router-dom';

// Importando Estilizações
import styles from '../Styles/components/navbar.module.css';

export default function Navbar() {
    return (
        <nav id={styles.navbar} className="navbar">
            <p id={styles.titleIndex}>3 Reasons Why</p>
            <div className={styles.groupButton}>
                <Link id={styles.buttonNav} to="/Register">
                    Login
                </Link>

                <Link id={styles.buttonNav} to="/Register">
                    CADASTRE-SE
                </Link>
            </div>
        </nav>
    )
}