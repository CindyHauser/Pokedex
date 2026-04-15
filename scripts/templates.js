function renderPokemonTemplates(pokemonDetails) {
    return `<a class="show_main_content bg_${pokemonDetails.types[0].type.name}" onclick="toggleDialog('${pokemonDetails.name}')">
                <h2>#${pokemonDetails.id}
                         ${pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
                <img src="${pokemonDetails?.sprites?.other?.home?.front_default 
                                     ?? pokemonDetails.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                <div>
                        <span class="pokemon_type_name">${pokemonDetails.types[0].type.name}</span>
                        ${pokemonDetails.types[1] ? `<span class="pokemon_type_name">${pokemonDetails?.types[1]?.type?.name}</span>` : ""}
                </div>
                </a>`;
};

function renderSearchedPokemonsTemplate(searchedPokemons){
        return `<a class="show_main_content" onclick="toggleDialog()>
                <h2>${searchedPokemons.name}</h2>
                <img src="${searchedPokemons?.sprites?.other?.home?.front_default 
                                     ?? searchedPokemons.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                </a>`;
};

function showDialogPokemonsTemplate(pokemon){
        return `<header>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</header>
                    <main class="dialog_main_content">
                           <img class="dialog_pokemon_img" src="${pokemon?.sprites?.other?.home?.front_default 
                                     ?? pokemon.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                        <ul>
                          <li>Height: ${pokemon.height * 10} cm</li>
                          <li>Weight: ${pokemon.weight / 10} kg</li>
                          <li>Abilities: ${pokemon.abilities.map(p=>p.ability.name).join(', ')}</li>
                        </ul>
                    </main>
                    <footer></footer>`;
}