import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeightIcon from '@mui/icons-material/Height';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import pokeball from '../assets/Pokeball.png';
import PokemonRenderTypes from '../components/PokemonRenderTypes';
import PokemonType from '../components/PokemonType';
import { fetchPokemonDetailsById } from '../redux/pokemon/slice';
import { AppDispatch, RootState } from '../redux/store';

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { pokemon, loading, error } = useSelector((state: RootState) => state.pokemon);  // Use string para id
  const [pokemonData, setPokemon] = useState<any>(pokemon);
  const dispatch: AppDispatch = useDispatch();
  

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemonDetailsById(parseInt(id)));  // Parse id para número
    }
  }, [dispatch, id]);  // Adiciona o id como dependência

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  if (!pokemon) {
    return <div>No Pokemon Data</div>;
  }
  console.log(pokemon.stats[0].base_stat)
  return (
    <div className='bg-white h-[100vh] overflow-hidden'>
    <div className={`bg-pokemon-${pokemon.types[0]} h-[100vh] w-full`}>
      <img className='absolute z-10 right-0 opacity-5 top-5 w-[60vw]' src={pokeball} />
      <PokemonRenderTypes />
      <a href='../' className='text-white text-xl absolute top-4 left-2'><ArrowBackIcon /> </a>
      <strong className='text-xl text-white absolute left-10 top-5 capitalize'>{pokemon.name}</strong>
      <strong className='text-xl text-white absolute right-10 top-5'>#{pokemon.id}</strong>
      <img src={pokemon.official_artwork} className='absolute z-10 h-64 top-[8%] left-10' />
      <div className="bg-white absolute bottom-1 right-1 w-[98vw] h-[60vh] rounded-2xl p-5">
      <div className='flex justify-center'>
        <p className='w-full items-center grid gap-10 grid-cols-2 px-24 py-2'><div className='place-self-center'><PokemonType isBig={true} pokemonType={pokemon.types[0]} /></div>
        {pokemon.types[1] ? ( <div className='place-self-center'><PokemonType isBig={true} pokemonType={pokemon.types[1]} /></div>) : <></> }</p>
      </div>
        <div className='text-center w-full'>
          <h1 className={`text-pokemon-${pokemon.types[0]} text-xl text-center`}><strong>About</strong></h1>
        </div>
      <div className='grid grid-cols-3 py-3 text-center'>
        <p className='grid'><div> <HeightIcon fontSize='small' /> {pokemon.height * 10}cm </div><h1 className='text-xs'>Height</h1></p>
        <p className='grid'><div><LineWeightIcon fontSize='small'/>{pokemon.weight / 10}kg </div> <h1 className='text-xs'>Weight</h1></p>
        <p className='grid'><div className='capitalize'>{pokemon.abilities[0]} </div><h1 className='text-xs'>Ability</h1></p>
      
      </div>
      <p className='text-center'>{pokemon.description}</p>
      <div className='text-md mt-12'>stats</div>
      <div className='flex'>
          <div className='text-lg'>hp</div>
          <div className={`absolute left-28 bg-gray-200 ml-5 mt-3 w-[60vw] h-2 rounded-xl`}>
          <div className={ `absolute bg-pokemon-${pokemon.types[0]} w-[44vw] h-2 rounded-xl`}></div>
          <div className='absolute bg-green-300 w-[20vw] h-2 rounded-xl'></div>
          </div>
      </div>
      <div className='flex'>
          <div className='text-md'>attack</div>
          <div className={`absolute left-28 bg-gray-200 ml-5 mt-0 w-[60vw] h-2 rounded-xl`}>
          <div className={ `absolute bg-pokemon-${pokemon.types[0]} w-[44vw] h-2 rounded-xl`}></div>
          <div className='absolute bg-green-300 w-[20vw] h-2 rounded-xl'></div>
          </div>
      </div>
      <div className='flex'>
          <div className='text-md'>defense</div>
          <div className={`absolute left-28 bg-gray-200 ml-5 mt-0 w-[60vw] h-2 rounded-xl`}>
          <div className={ `absolute bg-pokemon-${pokemon.types[0]} w-[44vw] h-2 rounded-xl`}></div>
          <div className='absolute bg-green-300 w-[20vw] h-2 rounded-xl'></div>
          </div>
      </div>
      <div className='flex'>
          <div className='text-md'>special attack</div>
          <div className={`absolute left-28 bg-gray-200 ml-5 mt-0 w-[60vw] h-2 rounded-xl`}>
          <div className={ `absolute bg-pokemon-${pokemon.types[0]} w-[44vw] h-2 rounded-xl`}></div>
          <div className='absolute bg-green-300 w-[20vw] h-2 rounded-xl'></div>
          </div>
      </div>
      <div className='flex'>
          <div className='text-md'>special defense</div>
          <div className={`absolute left-28 bg-gray-200 ml-5 mt-0 w-[60vw] h-2 rounded-xl`}>
          <div className={ `absolute bg-pokemon-${pokemon.types[0]} w-[44vw] h-2 rounded-xl`}></div>
          <div className='absolute bg-green-300 w-[20vw] h-2 rounded-xl'></div>
          </div>
      </div>
      <div className='flex'>
          <div className='text-md'>speed</div>
          <div className={`absolute left-28 bg-gray-200 ml-5 mt-0 w-[60vw] h-2 rounded-xl`}>
          <div className={ `absolute bg-pokemon-${pokemon.types[0]} w-[44vw] h-2 rounded-xl`}></div>
          <div className='absolute bg-green-300 w-[20vw] h-2 rounded-xl'></div>
          </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PokemonDetail;
