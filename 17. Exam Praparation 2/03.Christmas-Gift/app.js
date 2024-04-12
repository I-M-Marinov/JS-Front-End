
const giftsUrl = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsButtonElement = document.getElementById('load-presents');
const addPresentButtonElement = document.getElementById('add-present');
const editPresentButtonElement = document.getElementById('edit-present');

const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');

const giftListDivElement = document.getElementById('gift-list');

addPresentButtonElement.addEventListener('click', () =>{

        fetch(giftsUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                gift: giftInputElement.value,
                for: forInputElement.value,
                price: priceInputElement.value,
            })
        })

        clearInputFields();
        loadAllPresents();
});

loadPresentsButtonElement.addEventListener('click', loadAllPresents);

async function loadAllPresents(){

    giftListDivElement.innerHTML = '';

    const response = await fetch(giftsUrl);
    const data = await response.json();

    const presents = Object.values(data);

    presents.forEach(present => {

    
        const changeButtonElement = document.createElement('button');
        changeButtonElement.textContent = 'Change';
        changeButtonElement.classList.add('change-btn');

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        deleteButtonElement.classList.add('delete-btn');

        const buttonsContainerDivElement = document.createElement('div');
        buttonsContainerDivElement.classList.add('buttons-container');

        buttonsContainerDivElement.appendChild(changeButtonElement);
        buttonsContainerDivElement.appendChild(deleteButtonElement);

        const pricePElement = document.createElement('p');
        pricePElement.textContent = present.price;

        const forPElement = document.createElement('p');
        forPElement.textContent = present.for;

        const giftPElement = document.createElement('p');
        giftPElement.textContent = present.gift;

        const divContentElement = document.createElement('div');
        divContentElement.classList.add('content');
        
        divContentElement.appendChild(giftPElement);
        divContentElement.appendChild(forPElement);
        divContentElement.appendChild(pricePElement);

        const giftSockElement = document.createElement('div');
        giftSockElement.classList.add('gift-sock');


        giftSockElement.appendChild(divContentElement);
        giftSockElement.appendChild(buttonsContainerDivElement);

        giftListDivElement.appendChild(giftSockElement);

        deleteButtonElement.addEventListener('click', () => {
            fetch(`${giftsUrl}/${present._id}`, {
                method: "DELETE",
            });

            loadAllPresents();
        });

        changeButtonElement.addEventListener('click', () =>{

            giftSockElement.remove();

            giftInputElement.value = giftPElement.textContent;
            forInputElement.value = forPElement.textContent;
            priceInputElement.value =  pricePElement.textContent;

            addPresentButtonElement.setAttribute('disabled', 'disabled');
            editPresentButtonElement.removeAttribute('disabled');

            editPresentButtonElement.addEventListener('click', () =>{
                fetch(`${giftsUrl}/${present._id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        gift: giftInputElement.value,
                        for: forInputElement.value,
                        price: priceInputElement.value,
                        _id: present._id,
                    })
            
                })

                addPresentButtonElement.removeAttribute('disabled'); 
                editPresentButtonElement.setAttribute('disabled', 'disabled');

                clearInputFields();
                loadAllPresents();

            });

            
        });
    });
}

function clearInputFields(){

    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}
