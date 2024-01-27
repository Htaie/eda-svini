import NavBar from './navigation/NavBar';
import Register from './authComponents/Register';
import Login from './authComponents/Login';

export const SecondPage = () => {
  return (
    <div>
      <NavBar />
      <Login />
      <Register />
    </div>
  );
};
