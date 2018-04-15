const outputDiv = document.getElementById('petHolder');

const printToDom = (petArray) => {
  outputDiv.innerHTML = domString(petArray);
};

const domString = (allPets) => {
  let petCard = '';
  petCard += `<div class="container-fluid><div class="row">`;
  allPets.forEach((pet) => {
    petCard += `<div class="col-sm-3">`;
    petCard += `<div class="pet-card panel panel-default">`;
    petCard +=   `<div class="panel-heading">`;
    petCard +=     `<h2 class="name">${pet.name}</h2>`;
    petCard +=   `</div>`;
    petCard +=   `<div class="panel-body">`;
    petCard +=     `<img class="pic" src="${pet.img}">`;
    petCard +=     `<h4 class="color">Color: ${pet.color}</h4>`;
    petCard +=     `<h4 class="skill">Special Skill: ${pet.specialSkill}</h4>`;
    petCard +=     `<h4 class="type">Type: ${pet.type}</h4>`;
    petCard +=   `</div>`;
    petCard += `</div>`;
    petCard += `</div>`;
  });
  petCard += `</div></div>`;
  return petCard;
};

module.exports = printToDom;
