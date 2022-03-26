import React from 'react';
import {MdMovie} from 'react-icons/md';

import styles from './styles.module.scss'


const Logo: React.FC = () => {
    
    return (
        <a href="http://localhost:9000/">
            <MdMovie 
                className={styles.logo}
                color='white'
            />
        </a>
    )
}

export default Logo