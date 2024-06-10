import PokemonType from "../PokemonType"

interface PokemonCardProps {
  Pokemon: Pokemon
}

interface Pokemon {
  id: number
  name: string
  official_artwork: string
  types: string[]
}

export default function PokemonCard({Pokemon} : PokemonCardProps) {
  console.log('Pokemon: ', Pokemon)
  return(
    <div className="bg-white drop-shadow-2dp overflow-hidden relative flex justify-center place-self-center items-center rounded-xl w-28 h-28 xl:w-64 xl:h-72">
      <h1 className="text-end absolute top-1 right-1 text-xs xl:text-lg">#{Pokemon.id}</h1>

      <img
        className="absolute w-20 h-20 xl:w-44 xl:h-44 z-10 mb-5 xl:mb-10"
        src={Pokemon.official_artwork} 
      />

      <div className="flex flex-col justify-center items-center pb-1 absolute bottom-0 bg-gray-200 h-12 xl:h-24 w-full rounded-xl">
        <h1 className="text-center text-xs mt-4 xl:text-2xl capitalize mb-2">{Pokemon.name}</h1>
        <div className={` ${Pokemon.types[1] ? 'grid-cols-2 grid gap-2 px-2' : 'flex '}`}>
          <PokemonType pokemonType={Pokemon.types[0]} />
          {Pokemon.types[1] ? ( <PokemonType pokemonType={Pokemon.types[1]} />) : <></> }
         
        </div>
      </div>
      
    </div>
  )
}