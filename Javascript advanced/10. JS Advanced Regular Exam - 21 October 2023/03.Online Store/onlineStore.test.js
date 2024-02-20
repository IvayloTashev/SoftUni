import { assert } from "chai";
import { onlineStore } from "./onlineStore.js";

describe("test suits", function () {

    describe("test isProductAvailable functionality", function () {
        it("test witn 0 or less", () => {
            assert.equal(onlineStore.isProductAvailable("milk", 0), `Sorry, milk is currently out of stock.`);
            assert.equal(onlineStore.isProductAvailable("milk", -1), `Sorry, milk is currently out of stock.`);
        });

        it("test witn input bigger than 0", () => {
            assert.equal(onlineStore.isProductAvailable("milk", 1), `Great! milk is available for purchase.`);
            assert.equal(onlineStore.isProductAvailable("milk", 10), `Great! milk is available for purchase.`);
        });

        it("test witn invalid input", () => {
            assert.throws(() => onlineStore.isProductAvailable("milk", "milk"), `Invalid input.`);
            assert.throws(() => onlineStore.isProductAvailable("milk", []), `Invalid input.`);
            assert.throws(() => onlineStore.isProductAvailable("milk", {}), `Invalid input.`);
            assert.throws(() => onlineStore.isProductAvailable(1, 1), `Invalid input.`);
            assert.throws(() => onlineStore.isProductAvailable([], 1), `Invalid input.`);
            assert.throws(() => onlineStore.isProductAvailable({}, 1), `Invalid input.`);
        });

    });

    describe("test canAffordProduct functionality", function () {
        it("test with result less than 0", () => {
            assert.equal(onlineStore.canAffordProduct(2, 1), `You don't have sufficient funds to buy this product.`);
        });

        it("test with result greater than 0", () => {
            assert.equal(onlineStore.canAffordProduct(2, 3), `Product purchased. Your remaining balance is $1.`);
        });

        it("test with invalid input", () => {
            assert.throws(() => onlineStore.canAffordProduct("2", "2"), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct("2", 2), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct(2, "2"), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct(2, []), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct([], 2), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct(2, {}), "Invalid input.");
            assert.throws(() => onlineStore.canAffordProduct({}, 2), "Invalid input.");
        });
    });

    describe("test getRecommendedProducts functionality", function () {
        it("test with match", () => {
            assert.equal(onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }, { name: "Mouse", category: "Gaming" }], "Gaming"), `Recommended products in the Gaming category: Keyboard, Mouse`);
            assert.equal(onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }], "Gaming"), `Recommended products in the Gaming category: Keyboard`);
        });

        it("test without match", () => {
            assert.equal(onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }, { name: "Mouse", category: "Gaming" }], "Sport"), `Sorry, we currently have no recommended products in the Sport category.`);
            assert.equal(onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }], "Sport"), `Sorry, we currently have no recommended products in the Sport category.`);
        });

        it("test with invalid data", () => {
            assert.throws(() => onlineStore.getRecommendedProducts("2", "Sport"), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts(2, "Sport"), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts({}, "Sport"), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }, { name: "Mouse", category: "Gaming" }], 1), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }, { name: "Mouse", category: "Gaming" }], []), "Invalid input.");
            assert.throws(() => onlineStore.getRecommendedProducts([{ name: "Keyboard", category: "Gaming" }, { name: "Mouse", category: "Gaming" }], {}), "Invalid input.");
        });
    });
});

