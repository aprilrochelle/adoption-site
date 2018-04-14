const fetchPets = require('./pets');
const printToDom = require('./dom');
const buttonEvents = require('./events');

let petList = [];

function whenPetsLoad () {
  petList = JSON.parse(this.responseText).pets;
  printToDom(petList);
};

function ifPetsFail () {
  console.error('Whoops!');
};

const initializer = () => {
  fetchPets(whenPetsLoad, ifPetsFail);
  buttonEvents();
};

const petArray = () => {
  return petList;
};

module.exports = {
  initializer,
  petArray,
};
