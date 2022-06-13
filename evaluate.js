function Car(make, model) {
    this.make = make;
    this.model = model;
}

const car = new Car('Honda', 'Civic');
console.log(car);


let name = 'elixir'
function Potion(name) {
    this.name = name;
    this.value = Math.floor(Math.random() * 9 + 1);
}

const potion = new Potion(name);
console.log(potion);