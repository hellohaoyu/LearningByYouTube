var animals = 
  [ {name: "Amy", species: "dog"},
    {name: "Kat", species: "rabbit"},
    {name: "Sid", species: "cat"},
    {name: "Patty", species: "dog"}, ];


// var dogs = animals.filter(function (animal) {
// 	return animal.species == "dog";
// });

// var isDog = function (animal) {
// 	return animal.species === "dog";
// };

// var dogs = animals.filter(isDog);

var animalNames = animals.map(function(animal) {
	return animal.name;
});



// console.log(dogs);
// console.log(nonDogs);
console.log(animalNames);
