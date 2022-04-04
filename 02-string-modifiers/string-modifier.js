"use strict";
class Strings {
    static toPascalCase(txt) {
        if (!txt.trim())
            return " ";
        const wordsArr = txt.split(" ");
        return wordsArr.map(word => word[0].toUpperCase() + word.toLowerCase().slice(1)).join(" ");
    }
}
console.log(Strings.toPascalCase("war AND peace")); // War And Peace
console.log(Strings.toPascalCase("Catcher in the Rye")); // Catcher In The Rye
console.log(Strings.toPascalCase("tO kILL A mOCKINGBIRD")); // To Kill A MockingBird
console.log(Strings.toPascalCase(" ")); // " "
