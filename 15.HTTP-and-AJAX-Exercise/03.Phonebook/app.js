/* 
Write a JS program that can load, create and delete entries from a Phonebook. You will be given an HTML template to which you must bind the needed functionality.
When the [Load] button is clicked, a GET request should be made to the server to get all phonebook entries. 
Each  received entry should be in a li inside the ul with id="phonebook" in the following format with text "<person>: <phone> " and a [Delete] button attached. 
Pressing the [Delete] button should send a DELETE request to the server and delete the entry. The received response will be an object in the following format:
{<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…} where <key> is an unique key given by the server and <person> and <phone> are the actual values.
When the [Create] button is clicked, a new POST request should be made to the server with the information from the Person and Phone textboxes, 
the Person and Phone textboxes should be cleared and the Phonebook should be automatically reloaded (like if the [Load] button was pressed).
The data sent on a POST request should be a valid JSON object, containing properties person and phone. Example format: 
{
  "person": "<person>",
  "phone": "<phone>"
}
The url’s to which your program should make requests are:
•	GET and POST requests should go to http://localhost:3030/jsonstore/phonebook
•	DELETE requests should go to http://localhost:3030/jsonstore/phonebook/:key> , where :key is the unique key of the entry 
(you can find out the key from the key property in the GET request)

*/

function attachEvents() {

    const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadButtonElement = document.getElementById('btnLoad');
    const createButtonElement = document.getElementById('btnCreate');
    const phonebookUlElement = document.getElementById('phonebook');

    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');

    loadButtonElement.addEventListener('click', () =>{
        fetch(phonebookUrl)
        .then(res => res.json())
        .then(entries => {

            const people = Object.values(entries);
            phonebookUlElement.innerHTML = '';
            people.forEach(person => {

                const deleteButtonElement = document.createElement('button');
                deleteButtonElement.textContent = 'Delete';
                const liElement = document.createElement('li');
                liElement.textContent = `${person.person}: ${person.phone}`;
                liElement.id = person._id;
                liElement.appendChild(deleteButtonElement);
                phonebookUlElement.appendChild(liElement);

                deleteButtonElement.addEventListener('click', ()=> {

                    fetch(`${phonebookUrl}/${liElement.id}`, {
                        method: 'DELETE'
                    }).then( ()=> {
                        phonebookUlElement.removeChild(liElement);
                    }).catch(error => console.log('Error'));
    
                });

            });
        }).catch(error => console.log('Error'));
    });

    createButtonElement.addEventListener('click', () =>{
        const name = personInputElement.value;
        const phone = phoneInputElement.value;

        const personObject = {
            person: name,
            phone: phone,
        }

        fetch(phonebookUrl, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(personObject),
        });

        personInputElement.value = '';
        phoneInputElement.value = '';
    });

}

attachEvents();