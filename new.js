class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person("hero", "rocks", 25000); //calling by new keyword
console.log(heroPerson);
const friendlyPerson = new Person("seli", 'akter', 50000);
console.log(friendlyPerson);

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const newPerson = new Person1("saika", 'ahmed', 10000);
console.log(newPerson);