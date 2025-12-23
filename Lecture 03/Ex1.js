const furniture = ["Table", "Chairs", "Couch"];
furniture.forEach((item) => {
    item.split('').forEach((letter) => {
        console.log(letter);
    });
});