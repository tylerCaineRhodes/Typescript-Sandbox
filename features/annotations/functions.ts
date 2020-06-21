const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b; 
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message)
};

const throwError = (message: string): never => {
  throw new Error(message);
}

//on the var declaration 
const addVar: (a: number, b: number) => number = (a, b) => {
  return a + b;
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};


const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//destructured
const logWeatherDestructured = ({date, weather}: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
