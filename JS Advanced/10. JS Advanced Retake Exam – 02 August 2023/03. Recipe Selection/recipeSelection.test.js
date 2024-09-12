import { assert } from "chai";
import { recipeSelection } from "./recipeSelection.js";

describe("test suits", function() {

    describe("test isTypeSuitable functionality", function() {
        it("test with no suitable input", () => {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegetarian"),  "This recipe is not suitable for vegetarians");
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegan"),  "This recipe is not suitable for vegans");
            assert.equal(recipeSelection.isTypeSuitable("Dairy", "Vegan"),  "This recipe is not suitable for vegans")
        });

        it("test with suitable input", () => {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Normal"),  "This recipe is suitable for your dietary restriction");
            assert.equal(recipeSelection.isTypeSuitable("Dairy", "Normal"),  "This recipe is suitable for your dietary restriction");
            assert.equal(recipeSelection.isTypeSuitable("string", "Balanced"),  "This recipe is suitable for your dietary restriction");
        });

        it("test with invalid input", () => {
            assert.throws(() => recipeSelection.isTypeSuitable("Meat", 1), "Invalid input");
            assert.throws(() => recipeSelection.isTypeSuitable(1, "Vegetarian"), "Invalid input");
            assert.throws(() => recipeSelection.isTypeSuitable(1, 1), "Invalid input");
            assert.throws(() => recipeSelection.isTypeSuitable([], []), "Invalid input");
            assert.throws(() => recipeSelection.isTypeSuitable({}, {}), "Invalid input");
        });
    });

    describe("test isItAffordable functionality", function() {
        it("test with valid input", () => {
            assert.equal(recipeSelection.isItAffordable(2, 1), "You don't have enough budget to afford this recipe");
            assert.equal(recipeSelection.isItAffordable(2, 4),  "Recipe ingredients bought. You have 2$ left");
        });

        it("test with invalid input", () => {
            assert.throws(() => recipeSelection.isItAffordable({}, {}), "Invalid input");
            assert.throws(() => recipeSelection.isItAffordable([], []), "Invalid input");
            assert.throws(() => recipeSelection.isItAffordable("1", "1"), "Invalid input");
            assert.throws(() => recipeSelection.isItAffordable(1, "1"), "Invalid input");
            assert.throws(() => recipeSelection.isItAffordable("1", 1), "Invalid input");
        });
    });

    describe("test getRecipesByCategory functionality", function() {
        it("test with invalid input", () => {
            assert.throws(() => recipeSelection.getRecipesByCategory(1, "Asian"), "Invalid input");
            assert.throws(() => recipeSelection.getRecipesByCategory({}, "Asian"), "Invalid input");
            assert.throws(() => recipeSelection.getRecipesByCategory("Meat", 1), "Invalid input");
            assert.throws(() => recipeSelection.getRecipesByCategory("Meat", []), "Invalid input");
            assert.throws(() => recipeSelection.getRecipesByCategory("Meat", {}), "Invalid input");
        });

        it("should return an array of recipe titles for the given category", () => {
            const recipes = [
                { title: "Pasta Carbonara", category: "Italian" },
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Classic Caesar Salad", category: "Salads" },
                { title: "Chocolate Chip Cookies", category: "Desserts" }
              ];
              assert.equal(recipeSelection.getRecipesByCategory(recipes, "Italian"), "Pasta Carbonara");
              assert.equal(recipeSelection.getRecipesByCategory(recipes, "Asian"), "Spicy Tofu Stir-Fry");
              assert.equal(recipeSelection.getRecipesByCategory(recipes, "Salads"), "Classic Caesar Salad");
              assert.equal(recipeSelection.getRecipesByCategory(recipes, "Desserts"), "Chocolate Chip Cookies");
        });
    });
});

