const fetchPets = (loadFx, errorFx) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFx);
  myRequest.addEventListener('error', errorFx);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = fetchPets;
