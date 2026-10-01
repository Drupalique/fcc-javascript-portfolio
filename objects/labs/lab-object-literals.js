// Lab: Object Literals
// Practice creating and accessing object properties.

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  isElectric: false,
};

console.log(car.make, car.model, car.year);

function describeCar(vehicle) {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
}

console.log(describeCar(car));

car.mileage = 32000;
delete car.isElectric;

console.log(Object.keys(car));

module.exports = { car, describeCar };
