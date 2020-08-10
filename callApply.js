const normalPerson = {
    firstName: "Saika",
    lastName: "Ahmed",
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount,tips,tax){
         console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
   
}
 normalPerson.chargeBill(100, 30, 20);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: "hero",
    lastName: "rocks",
    salary: 25000,
}
// normalPerson.chargeBill();
//   const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
//  heroChargeBill(2000);
//  heroChargeBill(3000);
//  console.log(heroPerson.salary);

 const friendlyPerson = {
     firstName: "seli",
     lastName: "akter",
     salary: 50000,
 }
//  const friendlyPersonCharge = normalPerson.chargeBill.bind(friendlyPerson); //using bind
//  friendlyPersonCharge(20000);
// normalPerson.chargeBill.call(friendlyPerson, 900, 100, 10); //using call
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10); //using call
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 20]); //using apply
console.log(heroPerson.salary);
normalPerson.chargeBill.apply(friendlyPerson, [3000, 300, 20]);
console.log(friendlyPerson.salary);