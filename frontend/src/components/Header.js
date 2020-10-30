import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink
          className={styles.logo}
          to="/"
          end
          aria-label="Voting - Home"
          activeStyle={{ color: '#999ff9' }}
        >
          <Dogs />
        </NavLink>{' '}
        <NavLink className={styles.login} to="/login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
