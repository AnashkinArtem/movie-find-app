import React, {useState} from 'react';
import { Logo } from '../../base';
import TitleHeader from './components/title/title';
import Search from './components/search/search';
import Resources from '../resources/Resources';

import styles from './styles.module.scss'


const Header: React.FC = () => {
    
    return(
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.header__wrapper}>
                <Logo/>
                <Resources resources={[]}/>
            </div>

            <TitleHeader/>

            <Search/>
        </div>
        </header>
    )
}

export default Header;