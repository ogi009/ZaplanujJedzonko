import {Recipe} from "./recipe.js"
import allRecipies from "./recipe.js"

document.addEventListener("DOMContentLoaded", function () {

    const addNewRecipt = document.querySelector(".addNewRecipt");
    const gridPlan = document.querySelector(".grid_plan");
    const gridPlan2 = document.querySelector(".grid_plan2");

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
    let counterPrint = 0;

    const printToAllRecipies = () => {


        const newRecipe1 = new Recipe(allRecipies.length + 1, newRecipeInput1.value, newRecipeInput2.value);
        const liIngridientsArray = ingridientsContainer.querySelectorAll("li");

        for (let el of liIngridientsArray) {
            newRecipe1.ingredients.push(el.innerText);
        }

        const liInstructionsArray = recipesContainer.querySelectorAll("li");

        for (let el of liInstructionsArray) {
            newRecipe1.instructions.push(el.innerText);
        }
        allRecipies.push(newRecipe1); // dodanie przepisu do globalnej tablicy


        console.clear();
        newRecipe1.saveToLocalStorage();
        newRecipeInput1.value = "";
        newRecipeInput2.value = "";
        textareaInstrcions.value = "";
        textareaIngridients.value = "";
        recipesContainer.innerText = "";
        ingridientsContainer.innerText = "";
        gridPlan2.classList.add("d_none");
        gridPlan.classList.remove("d_none");
        counterPrint++;
        console.log(allRecipies);
        console.log(localStorage);
    }


    newRecipeButton.addEventListener("click", e => {
        printToAllRecipies();

    })
});