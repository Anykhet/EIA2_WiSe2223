/*
 Aufgabe:<L03, Einkaufsliste>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <28.10.2022>
 Quellen: <Paula Jordans, Julia Befus, Pia Giovannelli, Havva Sümeyye Kilic>
*/

window.addEventListener("load", function (): void {
    const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
    const wrapper: HTMLElement = document.getElementById("todoWrapper");

    let todoCount: number = 0;


    input.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.key === "Enter") {
            createToDo();
            clearInput();
        }
    });


    function updateCounter(): void {
        document.querySelector("#counterItem").innerHTML = String(todoCount);
    }

    function clearInput(): void {
        input.value = "";
    }

    function createToDo(): void {
        todoCount++;
        updateCounter();
        console.log("new Item");
        console.log("amount");
        console.log("comment");

        const todoItem: HTMLDivElement = document.createElement("div");
        const checkbox: HTMLInputElement = document.createElement("input");
        const label: HTMLElement = document.createElement("label");
        const trashButton: HTMLElement = document.createElement("i");

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


        trashButton.addEventListener("click", function (): void {
            deleteItem(todoItem);
        });

    }

    function deleteItem(item: HTMLElement): void {

        wrapper.removeChild(item);
        console.log("delete Item")


        todoCount--;
        updateCounter();
    }

});