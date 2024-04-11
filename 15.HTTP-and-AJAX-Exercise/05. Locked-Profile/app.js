function lockedProfile() {

    const profilesUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainTagElement = document.getElementById('main');
    let counter = 1;

    fetch(profilesUrl)
        .then(res => res.json())
        .then(data => {
            const profileData = Object.values(data);

            profileData.forEach(profile => {

                createProfileElement(profile);
            })

        });

    mainTagElement.innerHTML = '';

    function createProfileElement(profile) {

        const showMoreButtonElement = document.createElement('button');
        showMoreButtonElement.textContent = 'Show more';

        const emailInputElement = document.createElement('input');
        emailInputElement.value = profile.email; // set the email of the person to the field
        emailInputElement.setAttribute('disabled', 'disabled');
        emailInputElement.type = 'email';
        emailInputElement.name = `user${counter}Email`;

        const emailInputLabelElement = document.createElement('label');
        emailInputLabelElement.textContent = 'Email:';

        const ageInputElement = document.createElement('input');
        ageInputElement.value = profile.age; // set the age of the person to the field
        ageInputElement.setAttribute('disabled', 'disabled');
        ageInputElement.type = 'email';
        ageInputElement.name = `user${counter}Age`;

        const ageInputLabelElement = document.createElement('label');
        ageInputLabelElement.textContent = 'Age:';

        const hrElement = document.createElement('hr');
        const brElement = document.createElement('br');

        const hiddenFieldsDivElement = document.createElement('div');
        hiddenFieldsDivElement.classList.add('user1HiddenFields');

        hiddenFieldsDivElement.appendChild(hrElement);
        hiddenFieldsDivElement.appendChild(emailInputLabelElement);
        hiddenFieldsDivElement.appendChild(emailInputElement);
        hiddenFieldsDivElement.appendChild(ageInputLabelElement);
        hiddenFieldsDivElement.appendChild(ageInputElement);
        hiddenFieldsDivElement.style.display = 'none';

        const usernameInputElement = document.createElement('input');
        usernameInputElement.setAttribute('disabled', 'disabled');
        usernameInputElement.name = `user${counter}Username`;
        usernameInputElement.value = profile.username; // set the username of the person to the field
        const usernameInputLabelElement = document.createElement('label');
        usernameInputLabelElement.textContent = 'Username';

        const unlockInputElement = document.createElement('input');
        unlockInputElement.type = 'radio';
        unlockInputElement.value = 'unlock';
        unlockInputElement.name = `user${counter}Locked`;
        const unlockInputLabelElement = document.createElement('label');
        unlockInputLabelElement.textContent = 'Unlock';

        const lockInputElement = document.createElement('input');
        lockInputElement.type = 'radio';
        lockInputElement.value = 'lock';
        lockInputElement.name = `user${counter}Locked`;
        lockInputElement.setAttribute('checked', '');
        const lockInputLabelElement = document.createElement('label');
        lockInputLabelElement.textContent = 'Lock';


        const imgElement = document.createElement('img');
        imgElement.src = './iconProfile2.png';
        imgElement.classList.add('userIcon');



        const classProfileDivElement = document.createElement('div');
        classProfileDivElement.classList.add('profile');

        classProfileDivElement.appendChild(imgElement);
        classProfileDivElement.appendChild(lockInputLabelElement);
        classProfileDivElement.appendChild(lockInputElement);
        classProfileDivElement.appendChild(unlockInputLabelElement);
        classProfileDivElement.appendChild(unlockInputElement);
        classProfileDivElement.appendChild(brElement);
        classProfileDivElement.appendChild(hrElement);
        classProfileDivElement.appendChild(usernameInputLabelElement);
        classProfileDivElement.appendChild(usernameInputElement);
        classProfileDivElement.appendChild(hiddenFieldsDivElement);
        classProfileDivElement.appendChild(showMoreButtonElement)

        mainTagElement.appendChild(classProfileDivElement);


        counter++;


        showMoreButtonElement.addEventListener('click', () => {

            if (lockInputElement.checked) {
                button.setAttribute('disabled', 'disabled');

            } else if (unlockInputElement.checked) {
                showMoreButtonElement.removeAttribute('disabled');

                if (showMoreButtonElement.textContent == 'Show more') {
                    hiddenFieldsDivElement.style.display = 'block';
                    showMoreButtonElement.textContent = 'Hide it';
                } else {
                    hiddenFieldsDivElement.style.display = 'none';
                    showMoreButtonElement.textContent = 'Show more';
                }
            }
            showMoreButtonElement.removeAttribute('disabled');
        });

        return mainTagElement;
    }
}