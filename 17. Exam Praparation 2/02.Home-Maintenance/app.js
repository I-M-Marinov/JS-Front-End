window.addEventListener("load", solve);

function solve(){

        const placeInputElement = document.getElementById('place');
        const actionInputElement = document.getElementById('action');
        const personInputElement = document.getElementById('person');

        const addButtonElement = document.getElementById('add-btn');

        const taskListUlElement = document.getElementById('task-list');
        const doneTaskListUlElement = document.getElementById('done-list');

        addButtonElement.addEventListener('click', () => {

            const doneButtonElement = document.createElement('button');
            doneButtonElement.textContent = "Done";
            doneButtonElement.classList.add('done');

            const editButtonElement = document.createElement('button');
            editButtonElement.textContent = "Edit";
            editButtonElement.classList.add('edit');

            const divButtonsElement = document.createElement('div');
            divButtonsElement.classList.add('buttons');

            divButtonsElement.appendChild(editButtonElement);
            divButtonsElement.appendChild(doneButtonElement);

            const articleElement = document.createElement('article');

            const pPersonElement = document.createElement('p');
            pPersonElement.textContent = personInputElement.value;

            const pActionElement = document.createElement('p');
            pActionElement.textContent = actionInputElement.value;

            const pPlaceElement = document.createElement('p');
            pPlaceElement.textContent = placeInputElement.value;

            articleElement.appendChild(pPlaceElement);
            articleElement.appendChild(pActionElement);
            articleElement.appendChild(pPersonElement);

            const liCleanTaskElement = document.createElement('li');
            liCleanTaskElement.classList.add('clean-task');

            liCleanTaskElement.appendChild(articleElement);
            liCleanTaskElement.appendChild(divButtonsElement);

            if (personInputElement.value !== '' && actionInputElement.value !== '' && placeInputElement.value !== ''){

                taskListUlElement.appendChild(liCleanTaskElement);
                clearAll();
            } else {
                return;
            }
        
            editButtonElement.addEventListener('click', () => {

                placeInputElement.value =  pPlaceElement.textContent;
                actionInputElement.value =  pActionElement.textContent;
                personInputElement.value =  pPersonElement.textContent;

                taskListUlElement.innerHTML = '';

            });

            doneButtonElement.addEventListener('click', () => {

                taskListUlElement.innerHTML = '';

                const deleteButtonElement = document.createElement('button');
                deleteButtonElement.textContent = 'Delete';
                deleteButtonElement.classList.add('delete');

                const liDoneTasksElement = document.createElement('li');

                liDoneTasksElement.appendChild(articleElement);
                liDoneTasksElement.appendChild(deleteButtonElement);
                
                doneTaskListUlElement.appendChild(liDoneTasksElement);


                deleteButtonElement.addEventListener('click', () => {
                    liDoneTasksElement.remove();
                });
            });

        });

        function clearAll(){
            placeInputElement.value = '';
            actionInputElement.value = '';
            personInputElement.value = '';
        }
}