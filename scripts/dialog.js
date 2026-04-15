const DIALOG_WINDOW = document.getElementById('dialog_window');

function toggleDialog(name){
    if (DIALOG_WINDOW.open){
        DIALOG_WINDOW.close();
    } else {
        DIALOG_WINDOW.showModal();
        showDialogPokemons(name);
        // DIALOG_WINDOW.classList.add('opened_dialog');
    };
};

function stopPropagationFunction(event){
    event.stopPropagation();
};

function showDialogPokemons(name){
    let dialogContentRef = document.getElementById('dialogContent');
    let pokemon = allPokemons.find(pokemon => pokemon.name === name);
    dialogContentRef.innerHTML = showDialogPokemonsTemplate(pokemon);
};