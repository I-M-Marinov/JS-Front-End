function attachEvents() {

    const studentsUrl = 'http://localhost:3030/jsonstore/collections/students';

    const firstNameElement = document.querySelector('.inputs input:nth-child(1)');
    const lastNameElement = document.querySelector('.inputs input:nth-child(2)');
    const facultyNumberElemenent = document.querySelector('.inputs input:nth-child(3)');
    const gradeElement = document.querySelector('.inputs input:nth-child(4)');
    const submitButtonElement = document.getElementById('submit');

    const resultsTableBody = document.querySelector('#results tbody');

    let students = [];

    function getAllStudents(){

      resultsTableBody.innerHTML = '';
    
    fetch(studentsUrl)
    .then(res => res.json())
    .then(data => {

      const studentData = Object.values(data);

      studentData.forEach(student => {

        createStudent(student.firstName,student.lastName,student.facultyNumber,student.grade);
        createStudentElement(student);
      });
  });
    }


    function createStudent(firstName,lastName,facultyNumber, grade){
      const student = { firstName, lastName, facultyNumber, grade };
      students.push(student);

      return student;
    }

    function createStudentElement(student){

      const firstnameTdElement = document.createElement('td');
      firstnameTdElement.textContent = student.firstName;

      const lastnameTdElement = document.createElement('td');
      lastnameTdElement.textContent = student.lastName;

      const facultyNumberTdElement = document.createElement('td');
      facultyNumberTdElement.textContent = student.facultyNumber;

      const gradeTdElement = document.createElement('td');
      gradeTdElement.textContent = student.grade;

      const trElement = document.createElement('tr');

      trElement.appendChild(firstnameTdElement);
      trElement.appendChild(lastnameTdElement);
      trElement.appendChild(facultyNumberTdElement);
      trElement.appendChild(gradeTdElement);

      resultsTableBody.appendChild(trElement);

      return student;
    }

    getAllStudents();

    submitButtonElement.addEventListener('click', () => {

      const firstName = firstNameElement.value;
      const lastName = lastNameElement.value;
      const facultyNumber = facultyNumberElemenent.value;
      const grade = gradeElement.value;

      const newStudent = createStudent(firstName,lastName,facultyNumber, grade);

      fetch(studentsUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newStudent)
        
      });

     firstNameElement.value = '';
     lastNameElement.value = '';
     facultyNumberElemenent.value = '';
     gradeElement.value = '';


    createStudentElement(newStudent);

    });
}

attachEvents();