interface Reportable {
  summary(): string
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary():string {
    return `Name: ${this.name}`
  }
};

const drinkThing = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printVehicle = (vehicle: { name: string, year: Date, broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};
printVehicle(oldCivic);


const printSummary = (item: Reportable): void => {
   console.log(`Broken?: ${item.summary()}`);
};
printSummary(oldCivic);
printSummary(drinkThing);
