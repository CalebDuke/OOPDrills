// Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.
// So let’s define a vehicle in a way that we can use inheritance to determine if it is a truck, sedan, or motorcycle.
// All vehicles have wheels, some have 2 some have 4. Not all have doors, and not all have reverse.
// So to keep it simple lets have this vehicle class construct an object that only has the properties manufacturer and number of wheels.
// Include a method called aboutVehicle, have it console log a string which will say what type of vehicle it is, who made it, and how many wheels it has.

class Vehicle {
    constructor (vehicle, manu, numWheels) {
            this.vehicle = vehicle    
            this.manu = manu;
            this.numWheels = numWheels;
            }
    aboutVehicle(){
        console.log(`This is a ${this.vehicle} made by ${this.manu} it has ${wheels}.`)
    }
}

class Sedan extends Vehicle {
    constructor(vehicle, manu, numWheels, size, mpg) {
        super(vehicle, manu, numWheels);
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`This is a ${this.vehicle} made by ${this.manu} it has ${this.numWheels} wheels. It also is ${this.size} sized and gets ${this.mpg} mpg!`);
    }
}

const sedan = new Sedan("sedan", "Ford", 4, "medium", 24);
sedan.aboutVehicle(); 

class Motorcycle extends Vehicle {
    constructor(vehicle, manu, numWheels, handlebars, nodoors) {
        super(vehicle, manu, numWheels);
        this.handlebars = handlebars;
        this.nodoors = nodoors;
    }

    aboutVehicle() {
        console.log(`This is a ${this.vehicle} made by ${this.manu} it has ${this.numWheels} wheels. It also uses ${this.handlebars} instead of a steering wheel and has ${this.nodoors} doors.`);
    }
}

const moto = new Motorcycle("Motorcycle", "Ducati", 2, "handlebars" , 0);
moto.aboutVehicle(); 




//  Create a class sedan which extends vehicle, give it an additional property of size which could be small or medium, and give it a property of mpg.
// Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically). So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.
// Each child class inherited the method which was created in vehicle, but each child class now has other specific features which define it. Update the method in each child class to console log a string that represents these features, but still have it tell is the type, manufacturer and how many wheels it has!