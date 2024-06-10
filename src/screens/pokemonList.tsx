import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Filter from "../components/Filter"
import PokemonCard from "../components/PokemonCard"
import PokemonRenderTypes from "../components/PokemonRenderTypes"
import SearchInput from "../components/SearchInput"
import { fetchPokemons } from "../redux/pokemon/slice"
import { AppDispatch, RootState } from "../redux/store"

export default function PokemonList(){
  const dispatch: AppDispatch = useDispatch()
  const {list: pokemons, loading, error} = useSelector((state: RootState) => state.pokemon)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [dispatch])

  return(
      <div className='w-full h-full m-0 p-0'>
        <PokemonRenderTypes />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <h1 className="text-center text-5xl text-white">Pokedex</h1>
        <div className="flex">
          <div className='grid pt-5 pb-5'>
            <SearchInput />
          </div>
          <Filter />
        </div>
        <div className=' bg-white mx-1 flex rounded-xl shadow-xl justify-center'>
          <div className=' mt-5 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-8 gap-10 w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[2000px] items-center'>
          {pokemons && pokemons.map((pokemon) => 
          <a href={`./${pokemon.id}`}>
            <PokemonCard key={pokemon.id} Pokemon={pokemon}/>
          </a>
       )}
       </div>
      </div>
    </div>
  )
}