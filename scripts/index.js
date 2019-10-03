console.log(`There are ${characters.length} characters in the array.`);

//How many characters names start with 'A'?
function charA() {
    let charACount = 0;
    characters.forEach(function(char) {
        if (char.name[0] === "A") {
            charACount += 1;
        }
        console.log(
            `There are ${charACount} characters starting with the letter A`
        );
    });
}

charA();

//How many characters names start with 'Z'?
function charZ() {
    let charZCount = 0;
    characters.forEach(function(char) {
        if (char.name[0] === "Z") {
            charZCount += 1;
        }
        console.log(
            `There are ${charZCount} characters starting with the letter Z`
        );
    });
}

charZ();

//How many characters are dead?
function deadChars() {
    let deadCharsCount = 0;
    characters.forEach(function(char) {
        if (char.died != "") {
            deadCharsCount += 1;
        }
    });
    console.log(`${deadCharsCount} have died`);
}

deadChars();

//Who has the most titles?
function findMostTitles() {
    let charWithMostTitles = "";
    let mostTitles = 0;
    characters.forEach(function(char) {
        charTitles = character.titles.length;
        if (charTitles > mostTitles) {
            charWithMostTitles = char.name;
            mostTitles = charTitles;
        }
    });
    console.log(`${charWithMostTitles} has the most titles with ${mostTitles}`);
}

findMostTitles();

//How many are Valyrian?
function valyrianChars() {
    let valyrianCount = 0;
    characters.forEach(function(char) {
        if (char.culture === "Valyrian") {
            valyrianCount += 1;
        }
    });
    console.log(`There are ${valyrianCount} characters`);
}

valyrianChars();

//What actor plays "Hot Pie"?
function hotPie() {
    characters.forEach(function(char) {
        if (char.name === "Hot Pie") {
            console.log(`${char.playedBy} plays Hot Pie`);
        }
    });
}

hotPie();
