function findLongestRepeatedSubstring (inputStr) {
    if (inputStr.length < 2 ) {
        return "";
    }
    
    let best = "";
    let bestLen = 0;

    for (let i = 0; i < inputStr.length; i++) {
        for (let j = i + 1; j <= inputStr.length; j++) {
            const sub = inputStr.slice(i, j);
            //console.log(i, j, sub);
            if (sub.length <= bestLen){
                continue;
            }
            const secondPos = inputStr.indexOf(sub, i + 1);
            if (secondPos !== -1) {
                //console.log("repeated:", sub, "at", i, "and", secondPos);
                if (sub.length > bestLen) {
                best = sub;
                bestLen = sub.length;
                }
            }
        }
    }
    return best;
}

console.log(findLongestRepeatedSubstring("banana"));
console.log(findLongestRepeatedSubstring("abcd"));
console.log(findLongestRepeatedSubstring("ababa"));