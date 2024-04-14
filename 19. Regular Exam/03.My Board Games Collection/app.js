
const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadGamesButtonElement = document.getElementById('load-games');
const gamesListDivElement = document.getElementById('games-list');

const nameInputElement = document.getElementById('g-name');
const typeInputElement = document.getElementById('type');
const playersInputElement = document.getElementById('players');

const addGameButtonElement = document.getElementById('add-game');
const editGameButtonElement = document.getElementById('edit-game');


loadGamesButtonElement.addEventListener('click',  loadAllGames);

function createGame(game){

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete-btn');
            deleteButtonElement.textContent = 'Delete';

            const changeButtonElement = document.createElement('button');
            changeButtonElement.classList.add('change-btn');
            changeButtonElement.textContent = 'Change';

            const divButtonsContainerElement = document.createElement('div');
            divButtonsContainerElement.classList.add('buttons-container');

            divButtonsContainerElement.appendChild(changeButtonElement);
            divButtonsContainerElement.appendChild(deleteButtonElement);

            const typePElement = document.createElement('p');
            typePElement.textContent = game.type;

            const playersPElement = document.createElement('p');
            playersPElement.textContent = game.players;

            const namePElement = document.createElement('p');
            namePElement.textContent = game.name;

            const divContentContainerElement = document.createElement('div');
            divContentContainerElement.classList.add('content');

            divContentContainerElement.appendChild(namePElement);
            divContentContainerElement.appendChild(playersPElement);
            divContentContainerElement.appendChild(typePElement);

            const divBoardGameElement = document.createElement('div');
            divBoardGameElement.classList.add('board-game');

            divBoardGameElement.appendChild(divContentContainerElement);
            divBoardGameElement.appendChild(divButtonsContainerElement);

            gamesListDivElement.appendChild(divBoardGameElement);

            changeButtonElement.addEventListener('click', () => {

                nameInputElement.value = game.name;
                typeInputElement.value = game.type;
                playersInputElement.value = game.players;

                editGameButtonElement.removeAttribute('disabled');
                addGameButtonElement.setAttribute('disabled', 'disabled');


                editGameButtonElement.addEventListener('click', () =>{

                    fetch(`${baseUrl}/${game._id}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: nameInputElement.value,
                            type: typeInputElement.value,
                            players: playersInputElement.value,
                            _id: game._id,
                        })
                
                    })

                    editGameButtonElement.setAttribute('disabled', 'disabled');
                    addGameButtonElement.removeAttribute('disabled');

                    clearInputFields();
                    loadAllGames();
                });
            });

            deleteButtonElement.addEventListener('click', () => {
                fetch(`${baseUrl}/${game._id}`, {
                    method: "DELETE",
                });
    
                loadAllGames();
            }); 
}

addGameButtonElement.addEventListener('click', () =>{

    if (nameInputElement.value == '' || typeInputElement.value == '' || playersInputElement.value == ''){
        return;
    }

    let name = nameInputElement.value;
    let type = typeInputElement.value;
    let players = playersInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            type: type,
            players: players,
            _id: '',
        })
    })

    clearInputFields();
    loadAllGames();
})

function loadAllGames(){

    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {

        const games = Object.values(data);

        gamesListDivElement.innerHTML = '';

        games.forEach(game => createGame(game));

    });
}

function clearInputFields(){

    nameInputElement.value = '';
    typeInputElement.value = '';
    playersInputElement.value = '';
    
}