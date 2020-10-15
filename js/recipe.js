/*  PRZEPIS
Ten plik zawiera implementację obiektu reprezentującego przepis, jego medoty oraz pola obiektu. Na końcu sposób użycia, polacam odpalić konsolę ;p

Recipe(id,title,description)
    id           - int, identyfikator przepisu
    title        - string, nazwa przepisu
    description  - string, opis przepisu
    ingredients  - array, składniki przepisu
    instructions - array, instrukcje przepisu
*/

function Recipe(id, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa przepisu
    this.description = description; // opis przepisu
    this.ingredients = []; // składniki przepisu
    this.instructions = []; // instrukcje przepisu
}
/*
 Metoda `.showInfo()`
 wyświetlająca w konsoli wszystkie informacje o przepisie */
Recipe.prototype.showInfo = function() {
    console.warn(this.id, this.title); // wyświetl id oraz tytuł
    console.warn(this.description); // wyświetl opis
    this.ingredients.map(function(elem, i) {
        console.warn(i, elem); // wyświetl każdy element
    })
    this.instructions.map(function(elem, i) {
        console.warn(i, elem); // wyświetl każdy element
    })
}

/*
Metoda `.saveToLocalStorage()`
zapisująca do localStorage informacje o przepisie */
Recipe.prototype.saveToLocalStorage = function() {
    /* if(){
        // uzupełnij
      }else{
        // uzupełnij
      } */
}

//przygotowanie globalnej zmiennej przechowującej wszystkie przepisy
var allRecipies = [];

// utworzenie kilku przykładowych przepisów
var newRecipe1 = new Recipe(allRecipies.length + 1, "Jajecznica na boczku", "Taką jajecznicę lubie najbardziej ;p ");
allRecipies.push(newRecipe1); // dodanie przepisu do globalnej tablicy
var newRecipe2 = new Recipe(allRecipies.length + 1, "Fasolka po bretońsku", "Taka fasolka że kołdrę podnosi!");
allRecipies.push(newRecipe2);
var newRecipe3 = new Recipe(allRecipies.length + 1, "Sałatka grecka", "Oryginalna sałatka grecka z pomidora, ogórka, czerwonej cebuli i czarnych oliwek, z oliwą i oregano. ");
allRecipies.push(newRecipe3);

// dodawanie składników do przepisu (newRecipe1, allRecipies[0])
newRecipe1.ingredients.push("3 jajka");
newRecipe1.ingredients.push("mała cebula");
newRecipe1.ingredients.push("szczypiorek");
newRecipe1.ingredients.push("5 plasterków boczku");

newRecipe1.instructions.push("Rozpuść masło na patelni i podgrzej.");
newRecipe1.instructions.push("Dodaj boczek.");
newRecipe1.instructions.push("Na rozgrzaną patelnię wbij jajaka i mieszaj doprawiając.");
newRecipe1.instructions.push("Podawaj z grzankami. Smacznego!");

//console.clear();
allRecipies[0].showInfo(); // wyświetla pierwszy przepis w konsoli

export default allRecipies;