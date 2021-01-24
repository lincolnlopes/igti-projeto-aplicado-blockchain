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
            case '/conta':
                setTitle('Minha Conta')
              break;
            case '/pautas/cadastro':
                  setTitle('Estatística')
              break;
            case '/pautas/':
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
