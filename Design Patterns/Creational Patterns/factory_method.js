// The factory method is basically just having a parent class that can create different versions
// of an object. The attributes of said objects can be altered in the "factory" class.
// This makes code cleaner by having all changes implemented in a single location instead of having 2+ classes to update when there 
// is a code change.

class Animal {
  speak() { }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow";
  }
}

class AnimalCreator {
  createAnimal() {
    throw "Not implemented";
  }

  makeSound() {
    const animal = this.createAnimal();
    return animal.speak();
  }
}

class DogCreator extends AnimalCreator {
  createAnimal() {
    return new Dog();
  }
}

class CatCreator extends AnimalCreator {
  createAnimal() {
    return new Cat();
  }
}

const dogCreator = new DogCreator();
console.log(dogCreator.makeSound());

const catCreator = new CatCreator();
console.log(catCreator.makeSound());