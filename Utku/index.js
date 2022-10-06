"use strict";
let Person = {
    Name: "Utku",
    Jobtitle: "Softwareengineer",
    Age: 15,
    info: function () {
        return `Hello there, My name is ${this.Name} and I am ${this.Age} years old, and I am a ${this.Jobtitle}`;
    }
};
console.log(Person.info());
//----------------------------------------B A S I C 1  F I N I S H E D------------------------------------------^
class Persons {
    constructor(jobLocation, Salary, printInfo) {
        this.jobLocation = jobLocation;
        this.Salary = Salary;
    }
    printInfo() {
        return `and I get ${this.Salary} every month, and I work in ${this.jobLocation}`;
    }
}
let Personen1 = new Persons("Vienna", 3600, []);
console.log(Personen1.printInfo());
//----------------------------------------B A S I C 2  F I N I S H E D------------------------------------------^
// class Vehicles  	{
//   Motorbikes: string;
//   Trucks: string;
//   constructor(Motorbikes: string, Trucks: string) {
//     this.Motorbikes = Motorbikes;
//     this.Trucks = Trucks;
//   }
// }
class Vehicles {
}
class Motorbikes {
    constructor(price, year, fuelType, seats, kilometers) {
        this.price = price;
        this.year = year;
        this.fuelType = fuelType;
        this.seats = seats;
        this.kilometers = kilometers;
    }
}
let Motor = new Motorbikes(4900, 2016, "benzin", 2, 522, []);
console.log(Motor);
class Trucks {
    constructor(price, year, fuelType, seats, kilometers) {
        this.price = price;
        this.year = year;
        this.fuelType = fuelType;
        this.seats = seats;
        this.kilometers = kilometers;
    }
}
let Truck = new Trucks(34999, 2012, "diesel", 6, 19051, []);
console.log(Truck);
//----------------------------------------A D V A N C E D   F I N I S H E D------------------------------------------^
