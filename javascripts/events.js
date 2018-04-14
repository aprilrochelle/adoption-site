const petArray = require('./data');
const printToDom = require('./dom');

const showFilteredPets = (e) => {
  const petFilter = e.target.id;
  for (let i = 0; i < petArray.length; i ++) {
    if (petFilter === petArray[i].type) {
      printToDom(petArray[i]);
    };
  };
};

const buttonEvents = () => {
  const buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showFilteredPets);
  };
};

module.exports = buttonEvents;
