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

function showDialogPokemonsTemplate(pokemon){
        return `<section class="dialog_style bg_${pokemon.types[0].type.name}">
                    <header>#${pokemon.id} 
                                    ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</header>
                    <main class="dialog_main_content bg_${pokemon.types[0].type.name}">
                     <div class="dialog_img_and_types">
                           <img class="dialog_pokemon_img" src="${pokemon?.sprites?.other?.home?.front_default 
                                     ?? pokemon.sprites.other["official-artwork"].front_default}" alt="Pokemon">
                        <div class="dialog_type_flex">
                                <span class="pokemon_type_name_dialog">${pokemon.types[0].type.name}</span>
                                ${pokemon.types[1] ? `<span class="pokemon_type_name_dialog">${pokemon?.types[1]?.type?.name}</span>` : ""}
                        </div>      
                     </div> 
                        ${showOtherStatsInDialog(pokemon.id)}
                     <div id="changeStats" class="pokemon_stats">
                        <ul>
                          <li>Height: ${pokemon.height * 10} cm</li>
                          <li>Weight: ${pokemon.weight / 10} kg</li>
                          <li>Abilities: ${pokemon.abilities.map(p=>p.ability.name).join(', ')}</li>
                        </ul>
                      </div>
                    </main>
                    <footer class="footer_dialog">
                        ${showDialogFooterTemplate(pokemon)}
                    </footer>
                    </section>`;
};

function showOtherStatsInDialog(pokemonID) {        
        return `
        <div>
                    <button class="btn_stats" onclick="showNormalStats(${pokemonID})">normal</button>
                    <button class="btn_stats" onclick="showFightStats(${pokemonID})">fight</button>
        </div>`
};

function showNormalStats(pokemonID) {
        let pokemonNormalStats = allPokemons.find(p => p.id === pokemonID);
        let normalStats = document.getElementById('changeStats');
        normalStats.innerHTML =  `
                        <ul>
                          <li>Height: ${pokemonNormalStats.height * 10} cm</li>
                          <li>Weight: ${pokemonNormalStats.weight / 10} kg</li>
                          <li>Abilities: ${pokemonNormalStats.abilities.map(p=>p.ability.name).join(', ')}</li>
                        </ul>`
};

function showFightStats(pokemonID) {
        let pokemonFightStats = allPokemons.find(p => p.id === pokemonID);
        let normalStats = document.getElementById('changeStats');
        normalStats.innerHTML =  `
                        <ul>                          
                          <li>HP: 
                              <div class="progress_bar_stats">
                                <div class="progress_fill" style="width:${pokemonFightStats.stats[0].base_stat}%;">${pokemonFightStats.stats[0].base_stat}%</div>
                              </div>
                          </li>
                          <li>Attack: 
                             <div class="progress_bar_stats">
                                <div class="progress_fill" style="width:${pokemonFightStats.stats[1].base_stat}%;">${pokemonFightStats.stats[1].base_stat}%</div>
                              </div>
                          </li>
                          <li>Defense: 
                             <div class="progress_bar_stats">
                                <div class="progress_fill" style="width:${pokemonFightStats.stats[2].base_stat}%;">${pokemonFightStats.stats[2].base_stat}%</div>
                              </div>
                          </li>
                        </ul>`
};

function  showDialogFooterTemplate(pokemon) {
        return `
        <button id="btnLeft" class="switch_to_next_pokemon ${pokemon.id === 1 ? 'invisible' : ''}" onclick="switchToLeftPokemon(${pokemon.id})">&#8678;</button>
        <button id="btnRight" class="switch_to_next_pokemon" onclick="switchToRightPokemon(${pokemon.id})">&#8680;</button>
          `;
};