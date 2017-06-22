//Introduct two high-order functions of list in JS.

var animals = 
  [ {name: "Amy", species: "dog"},
    {name: "Kat", species: "rabbit"},
    {name: "Sid", species: "cat"},
    {name: "Patty", species: "dog"}, ];

// High-Order function -> Filter
var dogs = animals.filter(function (animal) {
	return animal.species == "dog";
});

var isDog = function (animal) {
	return animal.species === "dog";
};

var dogs = animals.filter(isDog);
console.log(dogs);

// High-Order function -> Map
var animalNames = animals.map(function(animal) {
	return animal.name;
});

// Error -> arrow function is supported until ES6.
// var animalNames = animals.map((animal) => animal.name);

console.log(animalNames);
