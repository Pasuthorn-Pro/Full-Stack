const istatus = 200;

if (istatus == 200) {
    console.log("OK");
}
else if (istatus == 400) {
    console.log("Error!");
}
else {
    console.log("Unknown status");
}

switch (istatus) {
    case 200:
        break;
    case 400:
        console.log("Error!");
        break;
    default:
        console.log("Unknown");
}

const message = 
    (istatus === 200) ? "OK" : "Error!";