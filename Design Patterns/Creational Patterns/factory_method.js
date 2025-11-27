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