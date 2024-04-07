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