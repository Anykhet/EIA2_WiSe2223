/*
 Aufgabe:<01, Zufallsgedicht>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <12.10.2022>
 Quellen: <Paula Jordans, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic>
*/
//Programmstruktur implementieren//
var Zufallsgedicht;
(function (Zufallsgedicht) {
    //Arrays
    let s = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let p = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let o = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(s);
    console.log(p);
    console.log(o);
    //for-schleife
    for (let index = 6; index >= 1; index--) {
        let letzterSatz = getVerse(s, p, o);
        console.log(letzterSatz);
        //console.log(index)
        // getVerse(s,p,o);
        // console.log(getVerse);
    }
    //getVerse Funktion
    function getVerse(_s, _p, _o) {
        let randoms = Math.floor(Math.random());
        let randomp = Math.floor(Math.random());
        let randomo = Math.floor(Math.random());
        let verse = _s[randoms] + " " + _p[randomp] + " " + _o[randomo] + ".";
        _s.splice(randoms, 1);
        _p.splice(randomp, 1);
        _o.splice(randomo, 1);
        return verse;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=L01.js.map