var Strings = /** @class */ (function () {
    function Strings() {
    }
    Strings.toPascalCase = function (txt) {
        if (!txt.trim())
            return " ";
        var wordsArr = txt.split(" ");
        return wordsArr.map(function (word) { return word[0].toUpperCase() + word.toLowerCase().slice(1); }).join(" ");
    };
    return Strings;
}());
console.log(Strings.toPascalCase("war AND peace")); // War And Peace
console.log(Strings.toPascalCase("Catcher in the Rye")); // Catcher In The Rye
console.log(Strings.toPascalCase("tO kILL A mOCKINGBIRD")); // To Kill A MockingBird
console.log(Strings.toPascalCase(" ")); // " "
