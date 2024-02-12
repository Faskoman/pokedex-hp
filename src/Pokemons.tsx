import axios from "axios";
import styles from "./Pokemons.module.scss";

type PokemonsProps = {
  onPokemonNameClicked: (pokemonName: string) => void;
};

// const pokemons = ["Abra", "Pikachu", "Charmander", "Ditto", "Gengar"];
const pokemons = await getPokemonNames(151);

async function getPokemonNames(limit: number) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
  );

  const pokemons = []
  for (let i = 0; i < limit; i++) {
    pokemons.push(res.data.results[i].name);
  }
  return pokemons
}

console.log(pokemons);

export function Pokemons({ onPokemonNameClicked }: PokemonsProps) {
  return (
    <menu>
      {pokemons.map((pokemonName) => (
        <li key={pokemonName} className={styles.listItem}>
          <a
            href=""
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              onPokemonNameClicked(pokemonName);
            }}
          >
            {pokemonName}
          </a>
        </li>
      ))}
    </menu>
  );
}
