import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useMobile } from '../../shared/hooks/useMobile';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const SearchInputComponent = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const isMobile = useMobile();

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const inputVariants = {
    open: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    closed: {
      x: -510,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
  };

  if (isMobile) {
    return (
      <div className='flex flex-col items-center text-xs'>
        <SearchIcon
          style={{ fontSize: '20px' }}
          className={`${location.pathname === '/search' ? 'text-[#5138E9]' : ''}`}
        />
        <span>Поиск</span>
      </div>
    );
  }

  return (
    <div className='flex items-center gap-2 overflow-hidden'>
      <motion.div animate={showSearchInput ? 'open' : 'closed'} variants={inputVariants} transition={{ duration: 0.1 }}>
        <input
          type='text'
          placeholder='Поиск'
          className='text-black lg:w-[320px] xl:w-[510px] h-[35px] rounded-[4px] outline-none pl-5'
          value={searchValue}
          onChange={handleInputChange}
        ></input>
      </motion.div>
      {showSearchInput && <CloseIcon className='cursor-pointer' onClick={toggleSearchInput} />}
      {!showSearchInput && <SearchIcon className='cursor-pointer h-4 w-4' onClick={toggleSearchInput} />}
    </div>
  );
};
