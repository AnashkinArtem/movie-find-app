import React, {useState} from 'react';
import { Logo } from '../../base';
import TitleHeader from './components/title/title';
import Search from './components/search/search';

import styles from './styles.module.scss'
import { Movie } from 'src/utils/interfaces/interfaces';

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.header__wrapper}>
                <Logo/>
                {/* <button className={styles.header__btn__add}><span>+ ADD FILM</span></button> */}
            </div>

            <TitleHeader/>

            <Search/>
        </div>
        </header>
    )
}

export default Header;