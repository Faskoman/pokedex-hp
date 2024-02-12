import axios from "axios";
import styles from "./Pokemons.module.scss";

type PokemonsProps = {
  onPokemonNameClicked: (pokemonName: string) => void;
};

const pokemons = await getPokemonNames(151);

async function getPokemonNames(limit: number) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`
  );

  const names = []
  for (let i = 0; i < limit; i++) {
    names.push(res.data.results[i].name);
  }
  return names
}

export function Pokemons({ onPokemonNameClicked }: PokemonsProps) {
  return (
    <menu className={styles.menu}>
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
