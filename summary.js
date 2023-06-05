// 1. Optional Chaining 

const language = {
    name: 'javascript',
    creator: 'Brendan Eich',
    libarary: {
        react: {
            company: 'Facebook'
        }
    }
}
let company = language.libarary.react.company;
// console.log(company);

//array 
let colors = ['red', 'green', 'blue'];
colors = null;
console.log(colors?.[1]);



//student.marks?.math

// 2- map, filter, find
//(optional): forEach reduce (advanced)

// 4. Class
//5.(Must) prototypical Inheritance.




