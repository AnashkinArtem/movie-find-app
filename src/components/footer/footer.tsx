import React from "react";
import { Logo } from "src/base";
import { Link } from "react-router-dom";

import styles from './styles.module.scss'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer__wrapper}>
            <Logo/>
            <Link className={styles.link} to="/privacypolicy">Privacy Policy</Link>
        </div>
    )
}

export default Footer