// part 1

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
    honk() {
        return "Beep.";
    }
}

// part 2 
class Car extends Vehicle {
    numWheels() {
        return 4;
    }
}

// part 3
class Motorcycle extends Vehicle {
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

// part 4
class Garage {
    constructor(capacity) {
        if(!Number.isFinite(capacity) || capacity <= 0){
            throw new Error ('Capacity must be a positive number')
        }
        this.capacity = capacity
        this.vehicles = [];
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle)
        return "Vehicle added!"
    }
}
