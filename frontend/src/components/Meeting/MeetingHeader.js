import React from 'react'
//import Header from '../Header'

import styles from './MeetingHeader.module.css';
import { useLocation } from 'react-router-dom';
import MeetingHeaderNav from './MeetingHeaderNav';

const MeetingHeader = () => {

    const [title, setTitle] = React.useState('')
    const location = useLocation()

    React.useEffect(() => {
    
        switch(location.pathname) {
            case '/user':
                setTitle('Minha Conta')
              break;
            case '/meetings/create':
                  setTitle('Reuniões')
              break;
            case '/meetings':
                  setTitle('Reuniões')
              break;
            default:
                setTitle(location.pathname)
          }

    },[location])
     
    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <MeetingHeaderNav/>
        </header>
    )
}

export default MeetingHeader
