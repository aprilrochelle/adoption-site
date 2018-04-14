let petArray = [];

const getPets = () => {
  return petArray;
};

const setPets = (petList) => {
  petArray = petList;
};

module.exports = {
  getPets,
  setPets,
};
