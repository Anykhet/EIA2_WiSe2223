/*
 Aufgabe:<L09.1, OldMacdonaldsFarm>
 Name: <Aanya Khetarpal>
 Matrikel: <2711441>
 Datum: <08.12.2022>
 Quellen: <Pia Giovannelli, Julia Befus, Havva Kilic, Paula Jordans>
*/
var Farm;
(function (Farm) {
    class Animal {
        name;
        breed;
        foodtype;
        sound;
        foodneed;
        constructor(_name, _breed, _foodtype, _sound, _foodneed) {
            this.name = _name;
            this.breed = _breed;
            this.foodtype = _foodtype;
            this.sound = _sound;
            this.foodneed = _foodneed;
        }
    }
    //Variablen 
    let animals = [];
    let currentFood = {
        greens: 200,
        corn: 300,
        carrots: 400,
        meat: 550,
        fish: 350
    };
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        loadAnimals();
        feedAnimals();
        currentFood.greens = 190;
        currentFood.meat = 538;
        currentFood.fish = 345;
        currentFood.corn = 270;
        currentFood.carrots = 375;
        document.querySelector("#nextDay").addEventListener("click", foodForAnimal);
    }
    //Funktion 
    function loadAnimals() {
        let cow = new Animal("Buttermilch", "cow", "greens", "moo", 10); //Kuh
        let dog = new Animal("Mila", "dog", "meat", "woof", 12); //Hund
        let cat = new Animal("Malya", "cat", "fish", "miauz", 5); //Katze
        let chicken = new Animal("Kevin", "chicken", "corn", "bock", 30); //Huhn
        let pig = new Animal("Peppa", "pig", "carrots", "quick", 25); //Schwein
        animals.push(cow);
        animals.push(dog);
        animals.push(cat);
        animals.push(chicken);
        animals.push(pig);
        let cowDiv = document.getElementById("cow");
        let dogDiv = document.getElementById("dog");
        let catDiv = document.getElementById("cat");
        let chickenDiv = document.getElementById("chicken");
        let pigDiv = document.getElementById("pig");
        cowDiv.innerHTML = cow.breed + "<br>";
        dogDiv.innerHTML = dog.breed + "<br>";
        catDiv.innerHTML = cat.breed + "<br>";
        chickenDiv.innerHTML = chicken.breed + "<br>";
        pigDiv.innerHTML = pig.breed + "<br>";
    }
    //Funktion fürs Essen 
    function feedAnimals() {
        let cowDiv = document.getElementById("cow");
        let dogDiv = document.getElementById("dog");
        let catDiv = document.getElementById("cat");
        let chickenDiv = document.getElementById("chicken");
        let pigDiv = document.getElementById("pig");
        cowDiv.innerHTML += "<br>" + animals[0].name + " ate " + animals[0].foodneed + " kg of " + animals[0].foodtype + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[0].breed + " E-I-A-I-O, <br> With a " + animals[0].sound + " " + animals[0].sound + " here and a " + animals[0].sound + " there a " + animals[0].sound + "<br> everywhere" + "<br>";
        dogDiv.innerHTML += "<br>" + animals[1].name + " ate " + animals[1].foodneed + " kg of " + animals[1].foodtype + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[1].breed + " E-I-A-I-O, <br> With a " + animals[1].sound + " " + animals[1].sound + " here and a " + animals[1].sound + " there a " + animals[1].sound + "<br> everywhere" + "<br>";
        catDiv.innerHTML += "<br>" + animals[2].name + " ate " + animals[2].foodneed + " kg of " + animals[2].foodtype + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[2].breed + " E-I-A-I-O, <br> With a " + animals[2].sound + " " + animals[2].sound + " here and a " + animals[2].sound + " there a " + animals[2].sound + "<br> everywhere" + "<br>";
        chickenDiv.innerHTML += "<br>" + animals[3].name + " ate " + animals[3].foodneed + " kg of " + animals[3].foodtype + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[3].breed + " E-I-A-I-O, <br> With a " + animals[3].sound + " " + animals[3].sound + " here and a " + animals[3].sound + " there a " + animals[3].sound + "<br> everywhere" + "<br>";
        pigDiv.innerHTML += "<br>" + animals[4].name + " ate " + animals[4].foodneed + " kg of " + animals[4].foodtype + "<br>" +
            "<br>" + "Old MacDonald had a farm, E-I-A-I-O, <br> And on his farm he had a " + animals[4].breed + " E-I-A-I-O, <br> With a " + animals[4].sound + " " + animals[4].sound + " here and a " + animals[4].sound + " there a " + animals[4].sound + "<br> everywhere" + "<br>";
        foodForAnimal();
    }
    //Funktion 
    function foodForAnimal() {
        currentFood.greens -= animals[0].foodneed;
        currentFood.meat -= animals[1].foodneed;
        currentFood.fish -= animals[2].foodneed;
        currentFood.corn -= animals[3].foodneed;
        currentFood.carrots -= animals[4].foodneed;
        for (const [key, foodAmount] of Object.entries(currentFood)) {
            if (foodAmount <= 0) {
                alert("no more food!");
                window.location.reload();
            }
        }
        let inventoryDiv = document.getElementById("inventory");
        inventoryDiv.innerHTML = "inventory:" + "<br>" + "<br>" +
            currentFood.greens + " kg greens " + "<br>" +
            currentFood.meat + " kg meat " + "<br>" +
            currentFood.fish + " kg fish " + "<br>" +
            currentFood.corn + " kg corn " + "<br>" +
            currentFood.carrots + " kg carrots" + "<br>";
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=L09.js.map