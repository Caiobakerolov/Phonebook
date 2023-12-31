const form = document.querySelector('#contactForm');
const contactInserted = [];
const numberInserted = [];
let lines = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  addLine();
  updateTable();
  
});

function addLine() {
  const inputName = document.querySelector('#nameContact');
  const inputNumber = document.querySelector('#phoneNumber');

  if(numberInserted.includes(inputNumber.value)) {
    alert(`The number: ${inputNumber.value} already exists`);
  } else {
    numberInserted.push(inputNumber.value);
    contactInserted.push(inputName.value);
    let line = '<tr>';
    line += `<td> ${inputName.value} </td>`;
    line += `<td> ${inputNumber.value} </td>`;  
    line += '</tr>';
    lines += line;  
  }

  inputName.value = '';
  inputNumber.value = '';
}

function updateTable() {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = lines; 
}