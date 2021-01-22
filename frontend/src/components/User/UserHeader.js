import React from 'react'
import Header from '../Header'
import UserHeaderNav from './UserHeaderNav'

import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {

    const [title, setTitle] = React.useState('')
    const location = useLocation()

    React.useEffect(() => {
    
        switch(location.pathname) {
            case '/conta':
                setTitle('Minha Conta')
              break;
            case '/conta/conta/estatistica':
                  setTitle('Estatística')
              break;
            case '/conta/conta/pautas':
                  setTitle('Pautas')
              break;
            default:
                setTitle(location.pathname)
          }

    },[location])
     
    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav/>
        </header>
    )
}

export default UserHeader
