//map,  forEach, filter, find, reduce


const number = [1, 2, 3, 4, 5, 6];
//.reduce (accumulatorFunction, initial value)
//accmulatorfuncation use tow parameters 
const total = number.reduce((previous, current) => previous + current, 0)
console.log(total);


