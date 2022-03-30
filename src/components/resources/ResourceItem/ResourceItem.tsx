import React from 'react';
import styles from './styles.module.scss';

interface iProps {
    Logo: string;
    Link: string;
    Title: string;
}

const ResourceItem: React.FC<iProps> = ({Logo, Link, Title}) => {
  return (
    <>
        <div className={styles.resource__item}>
            <a href={Link} target='_blank' className={styles.resource__link}>
                <img src={Logo} alt="logo" className={styles.resource__logo}/>
                <div className={styles.resource__title}><h6>{Title}</h6></div>
            </a>   
        </div>     
    </>
  )
}

export default ResourceItem