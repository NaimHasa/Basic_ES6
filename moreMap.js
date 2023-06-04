const products = [
    { id: 1, name: 'laptop', price: '150000' },
    { id: 1, name: 'Mobile', price: '50000' },
    { id: 1, name: 'Watch', price: '15000' },
    { id: 1, name: 'Tablet', price: '14000' }
];


const items = products.map(product => product.price);
console.log(items)

const number = ['15', '52', '60'];
const output = number.map(num => num * 2);
console.log(output);


const friends = ['Mokter', 'Ahamed', 'Tanvir', 'Tanim', 'Mosharof'];
const fristLetter = friends.map(f => f[0]);
console.log(fristLetter);

