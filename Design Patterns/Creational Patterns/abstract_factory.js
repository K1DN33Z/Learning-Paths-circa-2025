// Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
// Use the Abstract Factory when your code needs to work with various families of related products, but you don’t want it to depend on the concrete
// classes of those products — they might be unknown beforehand or you simply want to allow for future extensibility.

// Say we have the following products and variants

const products = ['chair', 'sofa', 'table']
const variants = ['minimal', 'modern', 'victorian']

// Ok now we want to create a factory that can create these items that includes all the products in a specific style
// first define your abstratc classes for the products

class Chair {
  sitOn() {}
}

class Sofa {
  lieOn() {}
}

class Table {
  dineOn() {}
}

// Now define concrete classes for the different variants and use the abstratc classes
class MinimalChair extends Chair {
  sitOn() {return "Sitting on a *minimal* chair"}
}

class MinimalSofa extends Sofa {
  lieOn() {return "Lying on a *minimal* sofa"}
}

class MinimalTable extends Table {
  dineOn() {return "Dining on a *minimal* table"}
}

class ModernChair extends Chair {
  sitOn() { return "Sitting on a *modern* chair" }
}

class ModernSofa extends Sofa {
  lieOn() { return "Lying on a *modern* sofa" }
}

class ModernTable extends Table {
  dineOn() { return "Dining on a *modern* table" }
}

class VictorianChair extends Chair {
  sitOn() { return "Sitting on a *victorian* chair" }
}

class VictorianSofa extends Sofa {
  lieOn() { return "Lying on a *victorian* sofa" }
}

class VictorianTable extends Table {
  dineOn() { return "Dining on a *victorian* table" }
}

// Create an abstarct furniture factory

class FurnitureFactory {
  createChair() {}
  createSofa() {}
  createTable() {}
}

class MinimalFurnitureFactory extends FurnitureFactory {
  createChair() { return new MinimalChair(); }
  createSofa() { return new MinimalSofa(); }
  createTable() { return new MinimalTable(); }
}

class ModernFurnitureFactory extends FurnitureFactory {
  createChair() { return new ModernChair(); }
  createSofa() { return new ModernSofa(); }
  createTable() { return new ModernTable(); }
}

class VictorianFurnitureFactory extends FurnitureFactory {
  createChair() { return new VictorianChair(); }
  createSofa() { return new VictorianSofa(); }
  createTable() { return new VictorianTable(); }
}

// Now using the abstract factory
function buildRoom(factory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  const table = factory.createTable();

  console.log(chair.sitOn());
  console.log(sofa.lieOn());
  console.log(table.dineOn());
}

// Example usage
const minimalFactory = new MinimalFurnitureFactory();
buildRoom(minimalFactory);

const modernFactory = new ModernFurnitureFactory();
buildRoom(modernFactory);

const victorianFactory = new VictorianFurnitureFactory();
buildRoom(victorianFactory);


