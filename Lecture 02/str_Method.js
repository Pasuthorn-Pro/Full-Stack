const fullName = "Pasuthorn Proongkiat";

const cleanName = fullName.trim();
console.log(cleanName.toUpperCase());

const nameParts = cleanName.split(" ");
console.log(nameParts);

const finalParts = nameParts.filter(Boolean);
console.log(finalParts.join(" - "));

const firstName = finalParts[0];

console.log(`Hello, ${firstName}!`);