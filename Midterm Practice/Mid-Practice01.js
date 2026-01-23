function processAndCombineString (strings, lenghtThreshold) {
    const uppercaseStrings = strings.map(item => {
        return item.toUpperCase();
    });
    const filteredStrings = uppercaseStrings.filter(item => {
        return item.length >= lenghtThreshold;
    });
    const countVowels = filteredStrings.map(word => {
        let count = 0;
        for (const char of word){
            if ("AEIOU".includes(char)){
                count++;
            }
        }
        return count;
    });
    const combined = filteredStrings.map((word, index) => {
        return {
            word: word,
            vowels: countVowels[index]
        };
    });
    const sortedStrings = combined.sort((a, b) => {
        if (a.vowels !== b.vowels) {
            return b.vowels - a.vowels;
        } else {
            return a.word.localeCompare(b.word);
        }
    });
    const result = sortedStrings.map(item => item.word);
        return result.join(" ");
    
}

const strings = ["apple", "banana", "cherry", "date", "fig", "grape"];

console.log(processAndCombineString(strings, 5));
console.log(processAndCombineString(strings, 6));
console.log(processAndCombineString(["hi", "hello", "world"], 2));
