import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/index';

const Header = () => {

  const isAuth = useSelector(state => {
    return state.auth.isAuth
  });

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth and Counter</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Orders</a>
            </li>
            <li>
              <a href='/'>Account settings</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
