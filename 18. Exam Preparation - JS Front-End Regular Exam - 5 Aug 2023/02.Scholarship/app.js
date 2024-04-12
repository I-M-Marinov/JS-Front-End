window.addEventListener("load", solve);

function solve() {
    
        const nextButtonElement = document.getElementById('next-btn');
    
        const studentInputFieldElement = document.getElementById('student');
        const universityInputFieldElement = document.getElementById('university');
        const scoreInputFieldElement = document.getElementById('score');

        const previewListUlElement = document.getElementById('preview-list');
        const candidatesListUlElement = document.getElementById('candidates-list');

        let university;
        let score;

        nextButtonElement.addEventListener('click', () => {

          if(studentInputFieldElement.value == '' || universityInputFieldElement.value == '' || scoreInputFieldElement.value == ''){
            return;
          }

          const applyButtonElement = document.createElement('button');
          applyButtonElement.textContent = 'apply';
          applyButtonElement.classList.add('action-btn');
          applyButtonElement.classList.add('apply');

          const editButtonElement = document.createElement('button');
          editButtonElement.textContent = 'edit';
          editButtonElement.classList.add('action-btn');
          editButtonElement.classList.add('edit');

          const scorePElement = document.createElement('p');
          scorePElement.textContent = `Score: ${scoreInputFieldElement.value}`;
          score = scoreInputFieldElement.value;

          const universityPElement = document.createElement('p');
          universityPElement.textContent = `University: ${universityInputFieldElement.value}`;
          university = universityInputFieldElement.value;

          const nameH4Element = document.createElement('h4');
          nameH4Element.textContent = studentInputFieldElement.value;

          const articleElement = document.createElement('article');

          articleElement.appendChild(nameH4Element);
          articleElement.appendChild(universityPElement);
          articleElement.appendChild(scorePElement);

          const applicationLiElement = document.createElement('li');
          applicationLiElement.classList.add('application');

          applicationLiElement.appendChild(articleElement);
          applicationLiElement.appendChild(editButtonElement);
          applicationLiElement.appendChild(applyButtonElement);


          previewListUlElement.appendChild(applicationLiElement);

          nextButtonElement.setAttribute('disabled', 'disabled');
          clearInputFields();

          editButtonElement.addEventListener('click', ()=> {

            studentInputFieldElement.value = nameH4Element.textContent;
            universityInputFieldElement.value = university;
            scoreInputFieldElement.value = score;

            previewListUlElement.innerHTML = '';
            nextButtonElement.removeAttribute('disabled');
          });

          applyButtonElement.addEventListener('click', () => {

            previewListUlElement.innerHTML = '';
            const candidatesLiElement = document.createElement('li');
            candidatesLiElement.classList.add('application');

            candidatesLiElement.appendChild(articleElement);
            candidatesListUlElement.appendChild(candidatesLiElement);
            nextButtonElement.removeAttribute('disabled');
          });

          return previewListUlElement;

        });

        function clearInputFields(){

          studentInputFieldElement.value = '';
          universityInputFieldElement.value = '';
          scoreInputFieldElement.value = '';
        }


  }
  