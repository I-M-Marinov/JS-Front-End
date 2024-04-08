/* 
Write a JS program that records and displays messages. The user can post a message, supplying a name and content and retrieve all currently recorded messages.
The url for the requests - http://localhost:3030/jsonstore/messenger
When [Send] button is clicked you should create a new object and send a post request to the given url. Use the following message structure:
{
  author: authorName,
  content: msgText,
}
If you click over [Refresh] button you should get all messages with GET request and display them into the textarea. Use the following message format:
"{author}: {message}"

*/

function attachEvents() {

    const requestUrl = "http://localhost:3030/jsonstore/messenger";

    const textAreaElement = document.getElementById('messages'); // text field element
    const nameFieldElement = document.getElementsByName('author')[0]; // name element
    const messageFieldElement = document.getElementsByName('content')[0]; // message element


    const submitButtonElement = document.getElementById('submit'); // SEND button
    const refreshButtonElement = document.getElementById('refresh'); // REFRESH button

    submitButtonElement.addEventListener('click', () => {

        const contentObject = {
            author: nameFieldElement.value,
            content: messageFieldElement.value,
        }

        fetch(requestUrl, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(contentObject),
        });

        nameFieldElement.value = '';
        messageFieldElement.value = '';
    });

    refreshButtonElement.addEventListener('click', () => {

        fetch(requestUrl)
        .then(res => res.json())
        .then(data => {

            const messages = Object.values(data);

            messages.forEach((message, index) => {

                textAreaElement.value += `${message.author}: ${message.content}`;
                if (index < messages.length - 1) {
                    textAreaElement.value += '\n';
                }
            });
        });
    });
}


attachEvents();