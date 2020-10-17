import {verification} from "./inputVerifaction.js"

document.addEventListener("DOMContentLoaded", function () {

    const addNewRecipt = document.querySelector(".addNewRecipt");
    const addNewPlan = document.querySelector(".addNewPlan");
    const gridPlan = document.querySelector(".grid_plan");
    const gridPlan2 = document.querySelector(".grid_plan2");
    const schelduePlan = document.querySelector(".schedule_plan");
    const saveButton =document.querySelector(".schedule_plan-save");
    const editButton = document.querySelector(".schedule_plan-edit");
    const saveTitle = document.querySelector(".schedule_plan-title");
    const editTitle = document.querySelector(".schedule_edit-title");

    addNewRecipt.addEventListener("click", e => {
        e.preventDefault();
        gridPlan.classList.add("d_none");
        gridPlan2.classList.remove("d_none");
    })
    const newInstructionBtn = document.querySelector(".newInstructionBtn");
    const textareaInstrcions = document.querySelector(".textarea_instrcions");
    const recipesContainer = document.querySelector(".recipes_container_ul");

    const newIngridiendsBtn = document.querySelector(".newIngridiendsBtn");
    const textareaIngridients = document.querySelector(".textarea_ingridients");
    const ingridientsContainer = document.querySelector(".ingridients_container_ul");

    const newRecipeButton = document.querySelector(".new_recipe_button");
    const newRecipeInput1 = document.querySelector(".new_recipe_input1");
    const newRecipeInput2 = document.querySelector(".new_recipe_input2");


    newInstructionBtn.addEventListener("click", e => {
        const liForRecipt = document.createElement("li");
        console.log(liForRecipt);
        liForRecipt.innerHTML = `${textareaInstrcions.value}`;
        console.log(liForRecipt);
        recipesContainer.append(liForRecipt);
        textareaInstrcions.value = "";

    })

    newIngridiendsBtn.addEventListener("click", e => {
        const liForIngridients = document.createElement("li");
        console.log(liForIngridients);
        liForIngridients.innerHTML = `${textareaIngridients.value}`;
        console.log(liForIngridients);
        ingridientsContainer.append(liForIngridients);
        textareaIngridients.value = "";
    })

    ///////////////////////////


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
    Recipe.prototype.showInfo = function () {
        console.warn(this.id, this.title); // wyświetl id oraz tytuł
        console.warn(this.description); // wyświetl opis
        this.ingredients.map(function (elem, i) {
            console.warn(i, elem); // wyświetl każdy element
        })
        this.instructions.map(function (elem, i) {
            console.warn(i, elem); // wyświetl każdy element
        })
    }

    /*
    Metoda `.saveToLocalStorage()`
    zapisująca do localStorage informacje o przepisie */
    Recipe.prototype.saveToLocalStorage = function () {
        localStorage.setObject(`'Recipt'`,allRecipies);
    }

//przygotowanie globalnej zmiennej przechowującej wszystkie przepisy
    const allRecipies = [];
    let counterPrint = 0;

    const printToAllRecipies = () => {


        const newRecipe1 = new Recipe(allRecipies.length + 1, newRecipeInput1.value, newRecipeInput2.value);
        const liIngridientsArray = ingridientsContainer.querySelectorAll("li");

        for (let el of liIngridientsArray) {
            newRecipe1.ingredients.push(el.innerText);
        }

    addNewPlan.addEventListener("click", e=> {
        e.preventDefault();
        gridPlan.classList.add("d_none");
        schelduePlan.classList.remove("d_none");
        saveButton.classList.remove('d_none');
        editButton.classList.add('d_none');
        saveTitle.classList.remove('d_none');
        editTitle.classList.add('d_none');

    })
});