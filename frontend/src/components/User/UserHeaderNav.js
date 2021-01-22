import React from 'react'
import { NavLink } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as Estatisticas} from '../../assets/estatisticas.svg'
import {ReactComponent as Conta} from '../../assets/usuario.svg'
import {ReactComponent as Decisoes} from '../../assets/question.svg'
import {ReactComponent as Sair} from '../../assets/sair.svg'
//import styles from './index.module.css';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {   

    const [mobile, setMobile] = React.useState(null)

    const {userLogout}= React.useContext(UserContext)

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end activeClassName={styles.active}><Conta/> {mobile&& 'Minha conta'}</NavLink>
            <NavLink to="conta/estatistica" activeClassName={styles.active}> <Estatisticas/> {mobile&& 'Estatística'}</NavLink>
            <NavLink to="conta/pautas" activeClassName={styles.active}> <Decisoes/> {mobile&& 'Decisões'}</NavLink>
            <button onClick={userLogout}><Sair/>{mobile&& 'Sair'}</button>
        </nav>
    )
}

export default UserHeaderNav
