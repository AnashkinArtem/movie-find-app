import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.scss';
import ResourceList from './ResourceList/ResourceList';
import { Resource } from 'src/utils/interfaces/interfaces';

interface IProps {
    resources: Resource[];
}

const Resources: React.FC<IProps> = ( {resources} ): JSX.Element  => {
    const [resIsVisable, setResIsVisable] = useState(false);

    const handleClick = () => {
        return (
            setResIsVisable(true)                   
        )        
    }
    const handleClose = () => {
        return (
            setResIsVisable(false)
        )
    }
    return (
        <>  
                <button type='button' className={styles.resource__btn__open} onClick={handleClick}>                    
                    <span className={styles.eye__icon}></span><span>WATCH</span>                    
                </button>        
            {
                resIsVisable ? 
                    <div className={styles.modal__wrapper}>
                        <ResourceList resources={resources}/>
                        <div className={styles.resource__btn__close} onClick={handleClose}><CloseIcon sx = {{width: '35px', height: '35px'}}/></div>
                    </div> 
                : null
            }
        </>
    )
}

export default Resources