import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Dogs } from '../assets/logo.svg';
import { UserContext } from '../UserContext';
import Input from './Forms/Input';
import styles from './Header.module.css';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink className={styles.logo} to="/" end aria-label="Voting - Home">
          <Dogs activeStyle={{ color: '#999ff9' }} />
        </NavLink>{' '}
        <NavLink className={styles.login} to={!data ? '/login' : '#'}>
          {data ? data.fullname : 'Login'}
        </NavLink>

      </nav>
    </header>
  );
};

export default Header;
