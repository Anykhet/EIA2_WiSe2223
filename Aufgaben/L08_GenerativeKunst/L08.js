/*
 Aufgabe:<L08, Generative Kunst>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <23.11.2022>
 Quellen: <Pia Giovannelli, Julia Befus, Havva  Kilic, Paula Jordans>
*/
var L04_GenerativeKunst;
(function (L04_GenerativeKunst) {
    window.addEventListener("load", fillCanvas);
    let canvas;
    let crc2;
    //Funktion für das Ausfüllen der Leinwand
    function fillCanvas(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        //Linien hinzugefügt
        let colorLines = ["black", "white", "grey"];
        for (let i = 0; i < colorLines.length; i++)
            for (let index = 0; index < 10; index++) {
                let a = randomNumber(0, canvas.width);
                let b = randomNumber(0, canvas.height);
                let c = randomNumber(0, canvas.width);
                let d = randomNumber(0, canvas.height);
                crc2.beginPath();
                crc2.strokeStyle = colorLines[i];
                crc2.moveTo(a, b);
                crc2.lineTo(c, d);
                crc2.closePath();
                crc2.stroke();
            }
        //Objekte
        let objectAmount = randomNumber(30, 300);
        for (let i = 0; i < objectAmount; i++) {
            drawRandomObject();
        }
        //Button reload -> neue Leinwand (extra)
        let newCanvas = document.querySelector("button");
        newCanvas.addEventListener("click", fillCanvas);
    }
    //Funktion, damit die Objekte an random Orten sind
    function drawRandomObject() {
        let x = randomNumber(0, canvas.width);
        let y = randomNumber(0, canvas.height);
        crc2.save();
        crc2.translate(x, y);
        crc2.fillStyle = randomColor();
        //sucht sich eine zufällige Form aus
        let objectShape = randomNumber(0, 3);
        switch (objectShape) {
            case 0:
                randomRectangle();
                break;
            case 1:
                randomCircle();
                break;
            case 2:
                randomPolygon();
                break;
        }
        crc2.restore();
    }
    //Funktion für die Rechtecke 
    function randomRectangle() {
        let width = randomNumber(10, 100);
        let height = randomNumber(10, 100);
        crc2.fillRect(0, 0, width, height);
    }
    //Funktion für Kreise
    function randomCircle() {
        let size = randomNumber(1, 100);
        crc2.beginPath();
        crc2.arc(0, 0, size, 0, 360);
        crc2.closePath();
        crc2.fill();
    }
    //Funktion für Polygone
    function randomPolygon() {
        let points = randomNumber(3, 8);
        crc2.beginPath();
        for (let i = 0; i < points; i++) {
            let x = randomNumber(0, 100) - randomNumber(0, 100);
            let y = randomNumber(0, 100) - randomNumber(0, 100);
            crc2.lineTo(x, y);
        }
        crc2.closePath();
        crc2.fill();
    }
    //zufällige Nummer 
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    // Funktion für die Farbe der Formen
    function randomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 8; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
})(L04_GenerativeKunst || (L04_GenerativeKunst = {}));
//# sourceMappingURL=L08.js.map