//Programmstruktur implementieren//
var Zufallsgedicht;
(function (Zufallsgedicht) {
    //Arrays
    let s = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let p = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let o = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(s, p, o);
    //for-schleife
    for (let index = 6; index >= 1; index--) {
        //console.log(index);
        //getVerse(subject, verb, object);
        //console.log(getVerse);
        let finalSentence = getVerse(s, p, o);
        console.log(finalSentence);
    }
    function getVerse(_subject, _verb, _object) {
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomVerb = Math.floor(Math.random() * _subject.length);
        let randomObject = Math.floor(Math.random() * _subject.length);
        let verse = _subject[randomSubject] + " " + _verb[randomVerb] + " " + _object[randomObject] + ".";
        _subject.splice(randomSubject, 1);
        _verb.splice(randomVerb, 1);
        _object.splice(randomObject, 1);
        return verse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=L01.js.map