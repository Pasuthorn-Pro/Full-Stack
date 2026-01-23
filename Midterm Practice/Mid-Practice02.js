function updateInventory(currentInventory, newInventory){
    let updatedInventory = [...currentInventory];

    for (let newItem of newInventory) {
        const existingItem = updatedInventory.find(
            item => item.name === newItem.name
        );

        if (existingItem) {
        existingItem.quality += newItem.quality;
        } else {
        updatedInventory.push(newItem);
        }
    }
    updatedInventory.sort((a, b) => a.name.localeCompare(b.name));
    return updatedInventory;

}

const currentInventory = [
    { name: 'item1', quality: 10},
    { name: 'item2', quality: 2},
    { name: 'item3', quality: 5},
];

const newInventory = [
    { name: 'item1', quality: 5},
    { name: 'item4', quality: 3},
    { name: 'item2', quality: 7},
];

console.log(updateInventory(currentInventory, newInventory));