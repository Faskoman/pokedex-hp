import axios from "axios";
import styles from "./Pokemons.module.scss";

type PokemonsProps = {
  onPokemonNameClicked: (pokemonName: string) => void;
};

const pokemons = await getPokemonNames();

async function getPokemonNames(offset: number = 0, limit: number = 151) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  const names = [];
  for (let i = 0; i < limit; i++) {
    names.push(res.data.results[i].name);
  }
  return names;
}

export function Pokemons({ onPokemonNameClicked }: PokemonsProps) {
  return (
    <menu className={styles.menu}>
      <ol>
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
      </ol>
    </menu>
  );
}
