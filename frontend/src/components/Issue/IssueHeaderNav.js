import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as Adicionar} from '../../assets/adicionar.svg'
import {ReactComponent as Conta} from '../../assets/usuario.svg'
import {ReactComponent as Decisoes} from '../../assets/question.svg'
import {ReactComponent as Sair} from '../../assets/sair.svg'
//import styles from './index.module.css';
import styles from './IssueHeaderNav.module.css';
import useMedia from '../../hooks/useMedia'

const IssueHeaderNav = () => {   

    const {userLogout}= React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu , setMobileMenu] = React.useState(true);

    const {pathname} = useLocation();

    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])


    return (
        <>
        {mobile&& (<button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu&&styles.mobileButtonActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}></button>)}
        <nav className={`${mobile ? styles.navMobile:styles.nav} ${mobileMenu&& styles.navMobileActive}`}>
            <NavLink to="/issues" end activeClassName={styles.active}><Conta/> {mobile&& 'Minha conta'}</NavLink>
            <NavLink to="/issues/create" activeClassName={styles.active}> <Adicionar/> {mobile&& 'Nova Pauta'}</NavLink>
            <NavLink to="/pautas/" activeClassName={styles.active}> <Decisoes/> {mobile&& 'Pautas'}</NavLink>
            <button onClick={userLogout}><Sair/>{mobile&& 'Sair'}</button>
        </nav></>
    )
}

export default IssueHeaderNav
