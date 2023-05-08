
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32; 
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertTempeture(degrees, unit) {
  
  if(unit === 'f'){
    const result = convertToFahrenheit(degrees); 
    return `${result}°c`;
  }else if(unit ==='c') {
    const result = convertToCelsius(degrees); 
    return `${result}°f`;
  }
}

console.log(convertTempeture(25, 'c')); 
console.log(convertTempeture(89, 'f')); 