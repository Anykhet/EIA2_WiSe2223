/*
 Aufgabe:<L04, Einkaufsliste Datenstruktur>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <05.11.2022>
 Quellen: <Paula Jordans, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic>
*/
var shoppinglistA04;
(function (shoppinglistA04) {
    let item;
    let amount;
    let dateData;
    let comment;
    let nextPurchase;
    let amountItems = 0;
    window.addEventListener("load", loadList);
    function loadList() {
        document.querySelector("h2").addEventListener("click", loadInput);
        loadData();
    }
    function loadData() {
        for (let counter = 0; counter < shoppinglistA04.savedInputs.length; counter++) {
            item = shoppinglistA04.savedInputs[counter].savedItem;
            amount = shoppinglistA04.savedInputs[counter].savedAmount;
            dateData = shoppinglistA04.savedInputs[counter].savedDate;
            comment = shoppinglistA04.savedInputs[counter].savedComment;
            let nextPurchaseString = shoppinglistA04.savedInputs[counter].savedPurchase.toString();
            if (nextPurchaseString == "false") {
                nextPurchase = "";
            }
            else {
                nextPurchase = " buy";
            }
            loadItem();
        }
    }
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        item = formData.get("Item").toString();
        amount = Number(formData.get("Amount"));
        dateData = new Date().toLocaleDateString();
        comment = formData.get("Area").toString();
        let nextPurchaseString = formData.get("Checkbox");
        if (nextPurchaseString == null) {
            nextPurchase = "";
        }
        else {
            nextPurchase = " buy";
        }
        loadItem();
    }
    function loadItem() {
        let newElement = document.createElement("div");
        newElement.innerHTML = dateData + " " + amount + " " + item + " " + comment + " " + nextPurchase;
        let getElement = document.querySelector("#output");
        getElement.appendChild(newElement);
        newElement.className = "outputItem" + amountItems;
        newElement.id = amountItems.toString();
        newElement.style.marginTop = "-10px";
        let newCheckbox = document.createElement("input"); //Checkbox einfügen
        newCheckbox.type = "checkbox";
        newCheckbox.name = "CheckboxName" + amountItems;
        getElement = document.querySelector("#output");
        getElement.appendChild(newCheckbox);
        newCheckbox.className = "checkbox" + amountItems;
        newCheckbox.id = "checkbox" + amountItems.toString();
        newCheckbox.name = "Checkbox" + amountItems.toString();
        newCheckbox.style.position = "relative"; //ändert Layout von den Boxen
        newCheckbox.style.left = "-85px";
        newCheckbox.style.top = "-14px";
        let newEdit = document.createElement("div"); //Edit-Button
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        getElement.appendChild(newEdit);
        newEdit.className = "edit" + amountItems;
        newEdit.id = "edit" + amountItems.toString();
        newEdit.style.position = "relative";
        newEdit.style.top = "-41px";
        newEdit.style.width = "20px";
        newEdit.style.left = "165px";
        let newTrash = document.createElement("div"); //Trash-Button
        newTrash.innerHTML = "<img id='" + amountItems + "' " + "src='../L04_EinkaufslisteDS/script/trash-solid.svg'>";
        newElement.appendChild(newTrash);
        newTrash.className = "trash" + amountItems;
        newTrash.style.width = "15px"; //ändert Layout von Trash
        newTrash.style.position = "relative";
        newTrash.style.left = "250px";
        newTrash.style.top = "7px";
        //Listener 
        document.querySelector(".trash" + amountItems).addEventListener("click", deleteItem);
        document.querySelector(".checkbox" + amountItems).addEventListener("click", checkboxNextPurchase);
        //zählt den Counter der Gesamtzahl der erzeugten Items
        amountItems++;
    }
    //Funktion zum löschen eines Eintrags 
    function deleteItem(_event) {
        console.log("delete");
        let x = _event.target.id;
        let outputElementId = document.getElementById(x);
        let editElementId = document.getElementById("edit" + x);
        let checkboxElementId = document.getElementById("checkbox" + x);
        checkboxElementId.remove();
        outputElementId.remove();
        editElementId.remove();
    }
    //Funktion zum überprüfen ob etwas gekauft wurde oder nicht 
    function checkboxNextPurchase(_event) {
        console.log("Checkbox Liste: Click -> checkboxNextPurchase()");
    }
})(shoppinglistA04 || (shoppinglistA04 = {}));
//# sourceMappingURL=L04.js.map