const fetchPets = require('./pets');
const printAllToDom = require('./dom');
const buttonEvents = require('./events');
const data = require('./data');

let petList = [];

function whenPetsLoad () {
  petList = JSON.parse(this.responseText).pets;
  data.setPets(petList);
  printAllToDom(petList);
};

function ifPetsFail () {
  console.error('Whoops!');
};

const initializer = () => {
  fetchPets(whenPetsLoad, ifPetsFail);
  buttonEvents.petButtonEvents();
  buttonEvents.unfilterEvent();
};

module.exports = {
  initializer,
};
