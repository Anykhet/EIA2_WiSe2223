/*
 Aufgabe:<L03, Einkaufsliste>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <28.10.2022>
 Quellen: <Paula Jordans, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic>
*/
window.addEventListener("load", function () {
    const input = document.getElementById("toDo");
    const wrapper = document.getElementById("todoWrapper");
    let todoCount = 0;
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            createToDo();
            clearInput();
        }
    });
    function updateCounter() {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);
    }
    function clearInput() {
        input.value = "";
    }
    function createToDo() {
        todoCount++;
        updateCounter();
        console.log("new Item");
        console.log("amount");
        console.log("comment");
        const todoItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const trashButton = document.createElement("i");
        todoItem.className = "todoItem";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        label.innerHTML = input.value;
        label.className = "divLabel";
        trashButton.className = " fas fa-trash-alt";
        wrapper.appendChild(todoItem);
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(trashButton);
        trashButton.addEventListener("click", function () {
            deleteItem(todoItem);
        });
    }
    function deleteItem(item) {
        wrapper.removeChild(item);
        console.log("delete Item");
        todoCount--;
        updateCounter();
    }
});
//# sourceMappingURL=L03.js.map