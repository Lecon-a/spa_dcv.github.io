"Use strict"; //ES6

const field = document.getElementById("field");
const reset = document.getElementById("reset_button");
const countButton = document.getElementById("count_button");
var characterLabelValue = document.getElementById("character");
var wordLabelValue = document.getElementById("word");
var sentenceLabelValue = document.getElementById("sentence");

var textObject = {
    text: '',
    wordCount: 0,
    sentenceCount: 0
};

field.addEventListener("keydown", (e) => {
    var value = field.value.length;
    if (value > 0 & e.key === "Backspace") {
        value--;
    }
});

reset.addEventListener("click", () => {
    //alert(`::Before\nText: ${textObject.text}, Character: ${textObject.letter}`);
    field.value = '';
    textObject = {
        text: '',
        letter: 0,
        word: 0,
        sentence: 0
    };
    characterLabelValue.innerHTML = "0";
    wordLabelValue.innerHTML = "0";
    sentenceLabelValue.innerHTML = "0";
    // console.clear();
    // alert(`::After\nText: ${textObject.text}, Character: ${textObject.letter}`);
});

countButton.addEventListener("click", count);

function count() {
    textObject.text = field.value;
    textObject.wordCount = countWord(textObject.text);
    textObject.sentenceCount = countSentence(textObject.text);
    characterLabelValue.innerHTML = textObject.text.length;
    wordLabelValue.innerHTML = textObject.wordCount;
    sentenceLabelValue.innerHTML = textObject.sentenceCount;
}

function countWord(txt) {
    var wordCount = 0;
    if (txt.length > 0) {
        wordCount = 1;
    }
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === " ") {
            wordCount += 1;
        }
    }
    return wordCount;
}

function countSentence(txt) {
    var sentenceCount = 0;
    var isLastIndex;
    const totalLength = txt.length;
    for (let i = 0; i < totalLength; i++) {
        isLastIndex = false;
        if (txt[i] === "," ||
            txt[i] === "." ||
            txt[i] === "!") {
            sentenceCount += 1;
            isLastIndex = true;
        }
    }
    if ((!isLastIndex) & (textObject.wordCount > 2)) {
        // console.log(`Result: ${isLastIndex} then add 1. Sentence = ${sentenceCount}`);
        sentenceCount += 1;
    }
    return sentenceCount;
}