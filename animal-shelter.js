const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet(greeting = 'Hi') {
    console.log(`${greeting}, my name is ${this.name} the ${this.species}`);
  }

  feed(food = 'food') {
    this.hunger -= 20;
    console.log(`Yum, I love ${food}`);
  }
}

class Cat extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, 'cat', color, hunger);
    this.food = 'fish';
  }

  greet() {
    super.greet('Meow');
  }

  feed() {
    super.feed(this.food);
  }


}

class Dog extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, 'dog', color, hunger);
    this.food = 'kibble';
  }

  greet() {
    super.greet('Woof');
  }

  feed() {
    super.feed(this.food);
  }

}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  adopt(animal) {
    const index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }

  getAnimalsBySpecies(species) {
    let animalsBySpecies = [];
    for (const animal of this.animals) {
      const index = this.animals.indexOf(animal);
      if (this.animals[index].species === species) {
       animalsBySpecies.push(this.animals[index]);
      }
    }
    return animalsBySpecies;
  }
}

const shelter = new AnimalShelter();

for (const a of animalData) { 
  let animal;
  const hunger = a.hunger ? a.hunger : 50;
  if (a.species === 'cat') {
    animal = new Cat(a.name, a.color, hunger)
  } else if (a.species === 'dog') {
    animal = new Dog(a.name, a.color, hunger)
  } else {
    animal = new Animal(a.name, a.species, a.color, hunger);
  }
  shelter.addAnimal(animal);
}

// console.log(shelter.animals)
// console.log(shelter.getAnimalsBySpecies("dog"));

// const oreo = new Cat('Oreo', 'black')
// console.log(oreo);

// const samson = new Dog('Samson', 'yellow')
// console.log(samson);

for (const animal of shelter.animals) {
  animal.greet();
  animal.feed();
}