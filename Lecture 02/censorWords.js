function censorWord(sentence, wordTocensor) {
    const regex = new RegExp(wordTocensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;
}

const originalPost = "JavaScript is fun, but sometimes Javascript can be tricky.";
const cleanPost = censorWord(originalPost, "JavaScript");

console.log(cleanPost);