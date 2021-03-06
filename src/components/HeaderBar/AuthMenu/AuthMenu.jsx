import { NavLink } from 'react-router-dom';
import styles from './authMenu.module.css';
import { navLinks } from './navLinks';

const getLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const AuthMenu = () => {
  const lis = navLinks.map(link => (
    <li key={link.href}>
      <NavLink className={getLinkClassName} to={link.href}>
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <header className={styles.nav}>
      <ul className={styles.headerMenu}>{lis}</ul>
    </header>
  );
};

export default AuthMenu;
