//Programmstruktur implementieren//

namespace Zufallsgedicht {

//Arrays

let s: string[]= ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let p: string[]= ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let o: string[]= ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers" , "Dementoren"];

console.log(s,p,o);

//for-schleife

for (let index: number = 6; index >= 1; index--) {
    //console.log(index);
    //getVerse(subject, verb, object);
    //console.log(getVerse);
    let finalSentence: string = getVerse(s, p, o);
    console.log(finalSentence);
    
}
function getVerse(_subject: string[], _verb: string[], _object: string[]): string {
    let randomSubject: number = Math.floor(Math.random() * _subject.length);
    let randomVerb: number = Math.floor(Math.random() * _subject.length);
    let randomObject: number = Math.floor(Math.random() * _subject.length);

    let verse: string = _subject[randomSubject] + " " + _verb[randomVerb] + " " + _object[randomObject] + ".";

    _subject.splice(randomSubject, 1);
    _verb.splice(randomVerb, 1);
    _object.splice(randomObject, 1);

    return verse;
    
}










}
