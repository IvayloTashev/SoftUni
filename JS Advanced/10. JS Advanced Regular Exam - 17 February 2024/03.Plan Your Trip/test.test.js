import { assert } from "chai";
import { planYourTrip } from "./planYourTrip.js";


describe("test suits", function () {

    describe("test choosingDestination functionality", function () {
        it("test with invalid year", () => {
            assert.throws(() => planYourTrip.choosingDestination("China", "Test", 2000), "Invalid Year!");
            assert.throws(() => planYourTrip.choosingDestination("China", "Test", 0), "Invalid Year!");
            assert.throws(() => planYourTrip.choosingDestination("China", "Test", -1), "Invalid Year!");
            assert.throws(() => planYourTrip.choosingDestination("China", "Test", 2030), "Invalid Year!");
        });

        it("test with invalid destination", () => {
            assert.throws(() => planYourTrip.choosingDestination("test", "Winter", 2024), "This destination is not what you are looking for.");
            assert.throws(() => planYourTrip.choosingDestination(1, "Winter", 2024), "This destination is not what you are looking for.");
            assert.throws(() => planYourTrip.choosingDestination(["test"], "Winter", 2024), "This destination is not what you are looking for.");
        });

        it("test with valid data", () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), "Great choice! The Winter is the perfect time to visit the Ski Resort.")
        });

        it("test with invalid data", () => {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.")
        });
    });

    describe("test exploreOptions functionality", function () {
        it("test with invalid input", () => {
            assert.throws(() => planYourTrip.exploreOptions("test", 1), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(1, 1), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions({}, 1), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.1), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 4), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], "1"), "Invalid Information!");
            assert.throws(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], [1]), "Invalid Information!");
        });

        it("test with valid data", () => {
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0), `Snowboarding, Winter Hiking`);
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1), `Skiing, Winter Hiking`);
            assert.equal(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2), `Skiing, Snowboarding`);
        });
    });

    describe("test estimateExpenses functionality", function () {
        it("test with invalid input", () => {
            assert.throws(() => planYourTrip.estimateExpenses("1", 1), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses({}, 1), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(1, {}), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(1, "1"), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses([1], "1"), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(1, [1]), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(-1, 1), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(1, -1), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(0, 1), "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(1, 0), "Invalid Information!");
        });

        it("test with valid data less or equal to 500$", () => {
            assert.equal(planYourTrip.estimateExpenses(100, 5), "The trip is budget-friendly, estimated cost is $500.00.");
            assert.equal(planYourTrip.estimateExpenses(100, 4), "The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("test with valid data more than to 500$", () => {
            assert.equal(planYourTrip.estimateExpenses(100, 10), "The estimated cost for the trip is $1000.00, plan accordingly.");
            assert.equal(planYourTrip.estimateExpenses(100, 6), "The estimated cost for the trip is $600.00, plan accordingly.");
        });

    });

});