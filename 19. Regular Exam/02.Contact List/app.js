window.addEventListener("load", solve);

function solve() {

  const checkListUlElement = document.getElementById('check-list');
  const contactListUlElement = document.getElementById('contact-list');
  const addButtonElement = document.getElementById('add-btn');

  const nameInputElement = document.getElementById('name');
  const phoneInputElement = document.getElementById('phone');
  const categoryInputElement = document.getElementById('category');

  let name = '';
  let phone = '';
  let categoryContact = '';

  addButtonElement.addEventListener('click', () => {

    console.log(categoryInputElement.value);

    if(nameInputElement.value != '' && phoneInputElement.value != '' && categoryInputElement.value != ''){
      

    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');

    const divButtonsElement = document.createElement('div');
    divButtonsElement.classList.add('buttons');

    divButtonsElement.appendChild(editButtonElement);
    divButtonsElement.appendChild(saveButtonElement);

    const categoryPElement = document.createElement('p');
    categoryPElement.textContent = `category:${categoryInputElement.value}`;

    const phonePElement = document.createElement('p');
    phonePElement.textContent = `phone:${phoneInputElement.value}`;

    const namePElement = document.createElement('p');
    namePElement.textContent = `name:${nameInputElement.value}`;

    name = nameInputElement.value;
    phone = phoneInputElement.value;
    categoryContact =  categoryInputElement.value;

    const articleElement = document.createElement('article');
    const liElement = document.createElement('li');

    articleElement.appendChild(namePElement);
    articleElement.appendChild(phonePElement);
    articleElement.appendChild(categoryPElement);
    liElement.appendChild(articleElement);
    liElement.appendChild(divButtonsElement);

    checkListUlElement.appendChild(liElement);

    editButtonElement.addEventListener('click', () => {

      checkListUlElement.innerHTML = '';

      nameInputElement.value = name;
      phoneInputElement.value = phone;
      categoryInputElement.value = categoryContact;


    });

    saveButtonElement.addEventListener('click', () => {

      checkListUlElement.innerHTML = '';

      const deleteButtonElement = document.createElement('button');
      deleteButtonElement.classList.add('del-btn');

      const newLiElement = document.createElement('li');
      newLiElement.appendChild(articleElement);
      newLiElement.appendChild(deleteButtonElement);

      contactListUlElement.appendChild(newLiElement);

      deleteButtonElement.addEventListener('click', () => {
        contactListUlElement.innerHTML = '';
      })

    });

    clearInputFields();
    } else {
      return;
    }

  })

  function clearInputFields() {

    nameInputElement.value = '';
    phoneInputElement.value = '';
    categoryInputElement.value = '';
  }

}
