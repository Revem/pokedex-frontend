import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonDetails } from '../../redux/pokemon/slice';
import { AppDispatch } from '../../redux/store';

export default function SearchInput() {
  const dispatch: AppDispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchPokemonDetails(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-[90%] justify-self-center xl:w-96 xl:h-10 shadow-inner drop-shadow-2dp rounded-xl flex bg-white">
      <SearchIcon fontSize='large' className='text-red-500 pl-2' />
      <input
        className="rounded-xl outline-none w-3/4 pl-2"
        placeholder='Search'
        onChange={handleInputChange}
      />
    </div>
  );
}
