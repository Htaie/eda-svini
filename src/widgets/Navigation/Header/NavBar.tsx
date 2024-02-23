import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { supabase } from '../../../../backend/apiClient/client';
import { useStore } from 'effector-react';
import { isLoggedInStore, updateIsLoggedIn } from '../../../components/Auth';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isLoggedIn = useStore(isLoggedInStore);

  const SignOut = async () => {
    const { error } = await supabase.auth.signOut();
    updateIsLoggedIn(false);
    if (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
  const gradientBackground = {
    background:
      'linear-gradient(180deg, rgba(0,0,0,.6), rgba(0,0,0,.595) 6.67%, rgba(0,0,0,.579) 13.33%, rgba(0,0,0,.551) 20%, rgba(0,0,0,.512) 26.67%, rgba(0,0,0,.461) 33.33%, rgba(0,0,0,.401) 40%, rgba(0,0,0,.334) 46.67%, rgba(0,0,0,.266) 53.33%, rgba(0,0,0,.199) 60%, rgba(0,0,0,.139) 66.67%, rgba(0,0,0,.088) 73.33%, rgba(0,0,0,.049) 80%, rgba(0,0,0,.021) 86.67%, rgba(0,0,0,.005) 93.33%, transparent)',
  };
  return (
    <div
      className={`w-screen fixed z-30 transition-all duration-300 ${visible ? 'top-0' : '-top-20'}`}
      style={gradientBackground}
    >
      <div className='container mx-auto my-0 flex h-32 items-center justify-between text-white'>
        <Link to={'/'} className='flex space-x-3 items-center'>
          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.39997 5.27259C2.39997 2.60499 4.15685 0.799988 6.75692 0.799988H25.243C27.8419 0.799988 29.6 2.60372 29.6 5.27259V31.2L27.3683 28.5387V5.27259C27.3683 4.69576 27.1449 4.14251 26.7472 3.73428C26.3494 3.32604 25.8098 3.09619 25.2467 3.09519H6.76063C6.19771 3.09653 5.65827 3.32648 5.26057 3.73464C4.86287 4.1428 4.63936 4.69587 4.63903 5.27259V24.0661C4.63903 24.6429 4.86244 25.1962 5.26021 25.6044C5.65798 26.0127 6.19761 26.2425 6.76063 26.2435H22.2683L24.4839 28.521L6.75692 28.5387C4.15808 28.5387 2.39997 26.735 2.39997 24.0661V5.27259Z'
              fill='#00925D'
            />
            <path
              d='M8.05619 12.1552V8.93137C8.05619 8.13535 8.37463 7.51445 9.0115 7.06868C9.64837 6.62291 10.5006 6.40002 11.5683 6.40002C12.6548 6.40002 13.5164 6.60699 14.1533 7.02092C14.7901 7.41893 15.1086 7.9443 15.1086 8.59704V11.5582C15.1086 11.8448 14.8651 12.0438 14.378 12.1552C14.1158 12.2189 13.8536 12.2508 13.5913 12.2508C13.3291 12.2508 13.0668 12.2269 12.8046 12.1791C12.8608 11.797 12.8889 11.3911 12.8889 10.9612V8.93137C12.8889 8.62888 12.7671 8.39803 12.5236 8.23883C12.2801 8.06371 11.9617 7.97614 11.5683 7.97614C11.175 7.97614 10.8565 8.06371 10.613 8.23883C10.3883 8.39803 10.2759 8.62888 10.2759 8.93137V11.7254C10.2759 12.2826 10.4913 12.6727 10.9221 12.8955L13.9004 14.5194C14.7433 14.9652 15.1648 15.6498 15.1648 16.5732V19.8687C15.1648 20.6647 14.837 21.2856 14.1814 21.7314C13.5258 22.1771 12.6548 22.4 11.5683 22.4C10.5006 22.4 9.639 22.201 8.9834 21.803C8.3278 21.3891 8 20.8557 8 20.203V17.2418C8 16.9552 8.24351 16.7562 8.73053 16.6448C8.99277 16.5811 9.25501 16.5493 9.51725 16.5493C9.77949 16.5493 10.0417 16.5732 10.304 16.6209C10.2478 17.003 10.2197 17.409 10.2197 17.8388V19.8687C10.2197 20.1552 10.3508 20.3861 10.613 20.5612C10.8753 20.7363 11.2031 20.8239 11.5964 20.8239C11.9898 20.8239 12.3082 20.7363 12.5517 20.5612C12.814 20.3861 12.9451 20.1552 12.9451 19.8687V17.1702C12.9451 16.5493 12.6922 16.1035 12.1865 15.8329L9.20818 14.1851C8.44019 13.7712 8.05619 13.0946 8.05619 12.1552Z'
              fill='white'
            />
            <path
              d='M16.8914 12.1552V8.93137C16.8914 8.13535 17.2099 7.51445 17.8467 7.06868C18.4836 6.62291 19.3359 6.40002 20.4036 6.40002C21.49 6.40002 22.3516 6.60699 22.9885 7.02092C23.6254 7.41893 23.9438 7.9443 23.9438 8.59704V11.5582C23.9438 11.8448 23.7003 12.0438 23.2133 12.1552C22.951 12.2189 22.6888 12.2508 22.4266 12.2508C22.1643 12.2508 21.9021 12.2269 21.6398 12.1791C21.696 11.797 21.7241 11.3911 21.7241 10.9612V8.93137C21.7241 8.62888 21.6024 8.39803 21.3589 8.23883C21.1154 8.06371 20.7969 7.97614 20.4036 7.97614C20.0102 7.97614 19.6918 8.06371 19.4483 8.23883C19.2235 8.39803 19.1111 8.62888 19.1111 8.93137V11.7254C19.1111 12.2826 19.3265 12.6727 19.7573 12.8955L22.7356 14.5194C23.5785 14.9652 24 15.6498 24 16.5732V19.8687C24 20.6647 23.6722 21.2856 23.0166 21.7314C22.361 22.1771 21.49 22.4 20.4036 22.4C19.3359 22.4 18.4742 22.201 17.8186 21.803C17.163 21.3891 16.8352 20.8557 16.8352 20.203V17.2418C16.8352 16.9552 17.0787 16.7562 17.5658 16.6448C17.828 16.5811 18.0902 16.5493 18.3525 16.5493C18.6147 16.5493 18.877 16.5732 19.1392 16.6209C19.083 17.003 19.0549 17.409 19.0549 17.8388V19.8687C19.0549 20.1552 19.186 20.3861 19.4483 20.5612C19.7105 20.7363 20.0383 20.8239 20.4317 20.8239C20.825 20.8239 21.1435 20.7363 21.387 20.5612C21.6492 20.3861 21.7803 20.1552 21.7803 19.8687V17.1702C21.7803 16.5493 21.5275 16.1035 21.0217 15.8329L18.0434 14.1851C17.2754 13.7712 16.8914 13.0946 16.8914 12.1552Z'
              fill='white'
            />
            <path d='M6.84267 29.1987L6.86134 29.18H6.828L6.84267 29.1987Z' fill='black' />
          </svg>
          <h1>MovieSage</h1>
        </Link>
        <div className='flex space-x-5'>
          <Link to={'genre/аниме'}>Anime</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Contact</Link>
          <Link to={'/'}>Contact</Link>
          <Link to={'/'}>SearchFilmTest</Link>
        </div>
        <div className='flex space-x-3 items-center'>
          <SearchIcon
            className='hover:cursor-pointer'
            onClick={() => {
              SignOut();
            }}
          />
          {isLoggedIn ? (
            <>
              <NotificationsNoneIcon />
              <img
                className='w-10 h-10 rounded-full'
                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
                alt='Profile Img'
              />
              <KeyboardArrowDownIcon />
            </>
          ) : (
            <>
              <Link className='border px-3 py-1 rounded-md' to={'/register'}>
                Sign Up
              </Link>
              <Link className='border border-green-700 bg-green-700 px-3 py-1 rounded-md' to={'/login'}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
