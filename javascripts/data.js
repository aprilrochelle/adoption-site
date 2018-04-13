const fetchPets = require('./pets');
const printToDom = require('./dom');

function whenPetsLoad () {
  const petList = JSON.parse(this.responseText).pets;
  printToDom(petList);
};

function ifPetsFail () {
  console.error('Whoops!');
};

const initializer = () => {
  fetchPets(whenPetsLoad, ifPetsFail);
};

module.exports = initializer;
