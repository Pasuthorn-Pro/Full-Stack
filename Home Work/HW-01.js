function countString(input, type) {
    if (type === "w") {
        let count_w = 0;
        let words = input.split(" ");

        for (const w of words) {
        if (w !== "") {
            count_w++;
        }
        }
        return count_w;
    } else if (type === "c") {
        let count_c = 0;
        for (const char of input) {
            if (char !== " ") {
                count_c++;
            }
        }
        return count_c;
    } else if (type === "v") {
        let count_v = 0;
        const vowels = "aeiou";
        for (const char of input) {
            if (vowels.includes(char)) {
                count_v++;
            }
        }
        return count_v;
    } else {
        throw new Error("Invalid parameter");
    }

}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8


module.exports = countString;
