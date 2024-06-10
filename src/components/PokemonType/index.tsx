interface PokemonTypeProps {

  pokemonType: string
  isBig?: boolean
}

export default function PokemonType({pokemonType, isBig}: PokemonTypeProps) {
  return(
    <div className={`${isBig ? 'w-16' : 'w-12'} xl:w-24 text-white rounded-xl border-black border-[1px] bg-pokemon-${pokemonType}`}>
      <h1 className={`text-center ${isBig ? 'text-lg' : 'text-subtitle3 xl:text-xl'} capitalize`}>{pokemonType}</h1>
    </div>
  )
}