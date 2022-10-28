/*
 Aufgabe:<L03, Einkaufsliste>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <28.10.2022>
 Quellen: <Paula Jordans, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic>
*/
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.querySelector("#trash").addEventListener("click", trash);
    document.querySelector("#check").addEventListener("click", check);
    document.querySelector("#newitem").addEventListener("click", item);
}
//Funktion fürs Löschen eines Items (durch Mülleimer)
function trash() {
    console.log("Item wird gelöscht von der Liste");
}
//Funktion fürs abhacken eines Items (durch checkbox)
function check() {
    console.log("Item wird abgehackt/wurde gekauft");
}
//Funktion für das hinzufügen eines Items (durch Plus)
function item() {
    console.log("Neues Item wird hinzugefügt");
}
//# sourceMappingURL=L03.js.map