const outputDiv = document.getElementById('petHolder');

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
};

const domString = (allPets) => {
  let petCard = '';
  allPets.forEach((pet) => {
    petCard += `<div class="pet-card">`;
    petCard +=   `<img class="pic" src="${pet.img}">`;
    petCard +=   `<h2 class="name">${pet.name}</h2>`;
    petCard +=   `<h4 class="color">Color: ${pet.color}</h4>`;
    petCard +=   `<h4 class="skill">Special Skill: ${pet.specialSkill}</h4>`;
    petCard +=   `<h4 class="type">Type: ${pet.type}</h4>`;
  });
  return petCard;
};

module.exports = printToDom;
