/*
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F.
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

/* Changing the weather forecasters temerature from Kelvin to Celsius and then to Fahrenheit.*/

//a constant variable for today's temperature:
const kelvin = 293;

// celsius is 273 degrees les than kelvin, so we declared a variable by sustracting this value from kelvin:
const celsius = kelvin - 273;

//we use this ecuation to calculate fahrenheit:
let fahrenheit = celsius * (9/5) + 32;

// to not have a decimal number we use built-in Math object .floor() to round down the fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

//We peint the Fahrenheit degree with interpolation string to see the result. 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

/*If you want to check the Fahrenheit temperature with another kelvin value just change the kelvin value.*/

//we use this ecuation to calculate newton:
let newton = celsius * (33/100);

// to not have a decimal number we use built-in Math object .floor() to round down the fahrenheit temperature.
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
