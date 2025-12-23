const kvArray = [
    {key:1, value: 10},
    {key:2, value: 20},
];

const reformatted = kvArray.map(({key, value}) => ({[key]: value}));

console.log(reformatted);
