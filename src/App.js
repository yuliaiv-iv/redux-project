import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {

  const isAuth  = useSelector(state => {
    return state.auth.isAuth
  })

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
