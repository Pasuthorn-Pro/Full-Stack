const startTime = Date.now();

function someHeavytask() {
    let result = 0;
}
const endTime = Date.now();

const duration = endTime - startTime;
console.log(`Duration: ${duration} ms`);