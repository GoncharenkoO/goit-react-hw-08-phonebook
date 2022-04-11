import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import defaultAvatar from './avatar.png';
import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';
import styles from './userInfo.module.css';

const UserInfo = () => {
  const { name } = useSelector(getUser, shallowEqual);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={styles.avatar}
      />
      <span className={styles.name}>Welcome, {name}</span>
      <button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
