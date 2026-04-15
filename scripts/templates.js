function renderPokemonTemplates(pokemonDetails) {
    return `<button class="show_main_content bg_${pokemonDetails.types[0].type.name}" onclick="toggleDialog('${pokemonDetails.name}')">
                <h2>#${pokemonDetails.id}
                         ${pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h2>
                <img src="${pokemonDetails?.sprites?.other?.home?.front_default 
                                     ?? pokemonDetails.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                <div class="type_gap">
                        <span class="pokemon_type_name">${pokemonDetails.types[0].type.name}</span>
                        ${pokemonDetails.types[1] ? `<span class="pokemon_type_name">${pokemonDetails?.types[1]?.type?.name}</span>` : ""}
                </div>
                </button>`;
};

function renderSearchedPokemonsTemplate(searchedPokemons){
        return `<button class="show_main_content" onclick="toggleDialog()>
                <h2>${searchedPokemons.name}</h2>
                <img src="${searchedPokemons?.sprites?.other?.home?.front_default 
                                     ?? searchedPokemons.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                </button>`;
};

function showDialogPokemonsTemplate(pokemon){
        return `<section class="dialog_style bg_${pokemon.types[0].type.name}">
                    <header>#${pokemon.id} 
                                    ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</header>
                    <main class="dialog_main_content bg_${pokemon.types[0].type.name}">
                           <img class="dialog_pokemon_img" src="${pokemon?.sprites?.other?.home?.front_default 
                                     ?? pokemon.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                        <div>
                                <span class="pokemon_type_name">${pokemon.types[0].type.name}</span>
                                ${pokemon.types[1] ? `<span class="pokemon_type_name">${pokemon?.types[1]?.type?.name}</span>` : ""}
                        </div>         
                        <ul>
                          <li>Height: ${pokemon.height * 10} cm</li>
                          <li>Weight: ${pokemon.weight / 10} kg</li>
                          <li>Abilities: ${pokemon.abilities.map(p=>p.ability.name).join(', ')}</li>
                        </ul>
                    </main>
                    <footer>
                        ${showDialogFooterTemplate(pokemon)}
                    </footer>
                    </section>`;
};

function  showDialogFooterTemplate(pokemon) {
        return `
        <button onclick="switchToLeftPokemon(${pokemon.id})">links</button>
        <button onclick="switchToRightPokemon(${pokemon.id})">rechts</button>`;
};

                          