// var person = {
//     name: {
//         first: 'Bob', 
//         last: 'Smith'
//     },
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//         return(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//         return('Hi! I\'m ' + this.name.first + '.');
//     }
// };

// console.log(person.greeting());

// CAR exercise WTIH shorthand

// var car = {
//     name: 'Gemini',
//     odometer: 0,
//     petrol: 100,
//     petrolPerKilometer: 0.2,
//     drive: function(kilometers) {
//       this.odometer += kilometers;
  
//       this.petrol -= kilometers * this.petrolPerKilometer;
  
//       console.log('Drive ' + kilometers + ' kilometers');
//     },
//     status: function() {
//       // helper method to check on cars status
//       return 'Status; odometer = ' + this.odometer + 'km petrol = ' + this.petrol + 'l';
//     }
//   }
  
//   car.drive(40);
  
//   console.log(car.status());
  
//   car.drive(200);
  
//   console.log(car.status());
  
//   car.drive(100);
  
//   console.log(car.status());

// CAR exercise WITHOUT shorthand


  var car = {
    name: 'Gemini',
    odometer: 0,
    petrol: 100,
    petrolPerKilometer: 0.2,
    drive: function(kilometers) {
      this.odometer = this.odometer + kilometers
  
      var petrolConsumed = kilometers * this.petrolPerKilometer
      this.petrol = this.petrol - petrolConsumed;
  
      console.log('Drive ' + kilometers + ' kilometers');
    },
    status: function() {
      // helper method to check on cars status
      return 'Status; odometer = ' + this.odometer + 'km petrol = ' + this.petrol + 'l';
    }
  }
  
  car.drive(40);
  
  var status1 = car.status();
  console.log(status1);
  
  car.drive(200);
  
  var status2 = car.status();
  console.log(status2);
  
  car.drive(100);
  
  var status3 = car.status();
  console.log(status3);
