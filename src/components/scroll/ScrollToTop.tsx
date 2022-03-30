import React, {useState, useEffect} from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styles from './styles.module.scss'

const ScrollToTop: React.FC = () => {
    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }; 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, []);

    return (
        <>
        {
         isVisable ? 
            <div className={styles.arrowup__wrapper}>
                 <BsFillArrowUpCircleFill className={styles.arrowup} onClick={scrollToTop}/>
            </div> 
            : null
        }
        </>
    )
};

export default ScrollToTop;