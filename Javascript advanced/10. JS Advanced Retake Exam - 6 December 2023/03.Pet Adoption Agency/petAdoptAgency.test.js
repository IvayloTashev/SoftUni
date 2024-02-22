import { assert } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js";

describe("test suit", function () {

    describe("isPetAvailable functionality", function () {
        it("availableCount is euqal to 0", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("cat", 0, true), `Sorry, there are no cat(s) available for adoption at the agency.`);
        });

        it("availableCount is equal to -1", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("cat", -1, true), `Sorry, there are no cat(s) available for adoption at the agency.`);
        });

        it("availableCount is equal to 1 and vaccinated is true", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("cat", 1, true), `Great! We have 1 vaccinated cat(s) available for adoption at the agency.`);
        });

        it("availableCount is equal to 1 and vaccinated is false", () => {
            assert.equal(petAdoptionAgency.isPetAvailable("cat", 1, false), `Great! We have 1 cat(s) available for adoption, but they need vaccination.`);
        });

        it("availableCount with invalid input for pet", () => {
            assert.throws(() => {
                petAdoptionAgency.isPetAvailable(1, 1, true);
            }, /Invalid input/);
        });

        it("availableCount with invalid input for count", () => {
            assert.throws(() => {
                petAdoptionAgency.isPetAvailable("cat", "1", true);
            }, /Invalid input/);
        });

        it("availableCount with invalid input for vaccinated", () => {
            assert.throws(() => {
                petAdoptionAgency.isPetAvailable("cat", "1", 1);
            }, /Invalid input/);
        });
    });

    describe("getRecommendedPets functionality", function () {
        it("test with match for traits", () => {
            assert.equal(petAdoptionAgency.getRecommendedPets([{ name: "Kiro", traits: "milk" }, { name: "Spas", traits: "milk" }], "milk"), `Recommended pets with the desired traits (milk): Kiro, Spas`)
        });

        it("test without match for traits", () => {
            assert.equal(petAdoptionAgency.getRecommendedPets([{ name: "Kiro", traits: "milk" }, { name: "Spas", traits: "milk" }], "salami"), `Sorry, we currently have no recommended pets with the desired traits: salami.`)
        });

        it("getRecommendedPets with invalid input for petList", () => {
            assert.throws(() => {
                petAdoptionAgency.getRecommendedPets("str", "milk");
            }, /Invalid input/);
        });

        it("getRecommendedPets with invalid input for treits", () => {
            assert.throws(() => {
                petAdoptionAgency.getRecommendedPets([{ name: "Kiro", traits: "milk" }, { name: "Spas", traits: "milk" }], 1);
            }, /Invalid input/);
        });

        describe("adoptPet functionality", function() {
            it("test with valind input", () => {
                assert.equal(petAdoptionAgency.adoptPet("cat", "Peter"), `Congratulations, Peter! You have adopted cat from the agency. Enjoy your time with your new furry friend!`);
            });

            it("adoptPet with invalind input for pet", () => {
                assert.throws(() => {
                    petAdoptionAgency.adoptPet(1, "Peter");
                }, /Invalid input/);
            });

            it("adoptPet with invalind input for adopterName", () => {
                assert.throws(() => {
                    petAdoptionAgency.adoptPet("cat", 0);
                }, /Invalid input/);
            });
        });
    });
});