function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longrunningOperation() {
    console.log("Opertion Start...");
    return 42;
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(2000);

    const response = await longrunningOperation();
    console.log(response);

    console.log("Stop!!")
}

console.log("Before run()");
run();
console.log("After run()");