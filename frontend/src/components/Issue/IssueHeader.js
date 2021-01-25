import React from 'react'
import Header from '../Header'
import IssueHeaderNav from './IssueHeaderNav'

import styles from './IssueHeader.module.css';
import { useLocation } from 'react-router-dom';

const IssueHeader = () => {

    const [title, setTitle] = React.useState('')
    const location = useLocation()

    React.useEffect(() => {
    
        switch(location.pathname) {
            case '/user':
                setTitle('Minha Conta')
              break;
            case '/issues/create':
                  setTitle('Estatística')
              break;
            case '/issues':
                  setTitle('Pautas')
              break;
            default:
                setTitle(location.pathname)
          }

    },[location])
     
    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <IssueHeaderNav/>
        </header>
    )
}

export default IssueHeader
