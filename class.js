class Animal {
    constructor(name) {

        this.name = name;
        console.log("object is created");

    }
    eats() {
        console.log('Eating a Bread');

    }
    Bark() {
        console.log('Dog is barking');

    }
}
class Lion extends Animal {
    constructor(name){
        super(name); // it is used to call the parent class constructor
    }
    eats() {
        console.log('Eating a Meat');

    }

}

let a = new Animal('Prince');
console.log(a);

let b = new Lion('Shimba ');
console.log(b);
