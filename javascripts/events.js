const data = require('./data');
const dom = require('./dom');

let petArray = [];

const showFilteredPets = (e) => {
  const petFilter = e.target.id;
  const filteredPets = [];
  petArray = data.getPets();
  for (let i = 0; i < petArray.length; i ++) {
    if (petFilter === petArray[i].type) {
      filteredPets.push(petArray[i]);
    };
  };
  dom(filteredPets);
};

const petButtonEvents = () => {
  const buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showFilteredPets);
  };
};

module.exports = petButtonEvents;
