const guests = ['Alice', 'Bob', 'Charlie', 'David'];
let index = 0;

while (index < guests.length) {
  if (guests[index] === 'Charlie') {
    console.log("Found Charlie!");
    break;
  }
  index++;
}
