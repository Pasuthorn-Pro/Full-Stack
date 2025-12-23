const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value) {
    console.log(value);
}

numbers.forEach(value => console.log(value));