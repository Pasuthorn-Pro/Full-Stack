let values1 = ['Apple', 1, false];
let values2 = ['Banana', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

const duplicate = values1.filter((item) => 
values2.includes(item) && values3.includes(item));

console.log(duplicate);
