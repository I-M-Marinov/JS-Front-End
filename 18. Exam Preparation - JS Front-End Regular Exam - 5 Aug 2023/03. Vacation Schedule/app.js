const tasksUrl = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsButton = document.getElementById('load-vacations');
const divListElement = document.getElementById('list');

const addVacationButtonElement = document.getElementById('add-vacation');
const editVacationButtonElement = document.getElementById('edit-vacation');

const nameInputElement = document.getElementById('name');
const numberOfDaysInputElement = document.getElementById('num-days');
const dateInputElement = document.getElementById('from-date');

loadVacationsButton.addEventListener('click', getVacations);

addVacationButtonElement.addEventListener('click', (event) => {
    event.preventDefault();

    const name = nameInputElement.value;
    const days = numberOfDaysInputElement.value;
    const date = dateInputElement.value;

    const vacation = {
        name,
        days,
        date,
    };

    fetch(tasksUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({name,days,date})
    });

    createVacation(vacation);
    getVacations();
    clearInputFields();

});


function createVacation(vacation) {

    const doneButtonElement = document.createElement('button');
    doneButtonElement.textContent = "Done";
    doneButtonElement.classList.add('done-btn');

    const changeButtonElement = document.createElement('button');
    changeButtonElement.textContent = "Change";
    changeButtonElement.classList.add('change-btn');

    const numberOfDaysElement = document.createElement('h3');
    numberOfDaysElement.textContent = vacation.days;

    const fromDateElement = document.createElement('h3');
    fromDateElement.textContent = vacation.date;

    const nameElement = document.createElement('h2');
    nameElement.textContent = vacation.name;

    const divContainerElement = document.createElement('div');
    divContainerElement.classList.add('container');

    divContainerElement.appendChild(nameElement);
    divContainerElement.appendChild(fromDateElement);
    divContainerElement.appendChild(numberOfDaysElement);
    divContainerElement.appendChild(changeButtonElement);
    divContainerElement.appendChild(doneButtonElement);

    divListElement.appendChild(divContainerElement);

    changeButtonElement.addEventListener('click', (event) => {
        event.preventDefault();
        
        divContainerElement.remove();

        nameInputElement.value = nameElement.textContent;
        numberOfDaysInputElement.value = numberOfDaysElement.textContent;
        dateInputElement.value = fromDateElement.textContent;

        addVacationButtonElement.setAttribute('disabled', 'disabled');
        editVacationButtonElement.removeAttribute('disabled');

        editVacationButtonElement.addEventListener('click', () =>{

            fetch(`${tasksUrl}/${vacation._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameInputElement.value,
                    days: numberOfDaysInputElement.value,
                    date: dateInputElement.value,
                })
            });

            addVacationButtonElement.removeAttribute('disabled');
            editVacationButtonElement.setAttribute('disabled', 'disabled');

            getVacations();
            clearInputFields();
            
        });

    });

    doneButtonElement.addEventListener('click', () =>{
        
        fetch(`${tasksUrl}/${vacation._id}`, {
            method: 'DELETE',
        });

        divContainerElement.remove();

        getVacations();
    });

}

function getVacations() {

    divListElement.innerHTML = '';

    fetch(tasksUrl)
        .then(res => res.json())
        .then(data => {

            const vacations = Object.values(data);

            vacations.forEach(vacation => {
                createVacation(vacation);
            });

        });
}

function clearInputFields(){

    nameInputElement.value = '';
    numberOfDaysInputElement.value = '';
    dateInputElement.value = '';

}

