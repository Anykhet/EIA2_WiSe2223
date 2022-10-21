/*
 Aufgabe:<L02, Event Inspector>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <20.10.2022>
 Quellen: <Paula Jordans, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic>
*/
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    //function handleload
    function handleLoad(_event) {
        let body = document.body;
        let div0 = document.querySelector("#div0");
        let div1 = document.querySelector("#div1");
        let button = document.querySelector("button");
        //Event Listener für Cursor
        document.addEventListener("mousemove", setInfoBox);
        //Divs und body event listener       
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        //Button event listener
        button.addEventListener("click", customEvent);
        document.addEventListener("cuddledog", logInfo);
    }
    //Cursor zeigt Koordinaten
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let target = _event.target;
        let span = document.querySelector("span");
        let offset = 10;
        span.style.left = (x + offset) + "px";
        span.style.top = (y + offset) + "px";
        span.innerHTML = "x: " + x + "<br>" + "y: " + y + "<br>" + "target: " + target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    //Custom Event Aufgabe 
    function customEvent(_event) {
        let button = _event.target;
        let newEvent = new CustomEvent("cuddledog", { bubbles: true }); // Buttons = custom Event in DOM
        button.dispatchEvent(newEvent);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=L02.js.map