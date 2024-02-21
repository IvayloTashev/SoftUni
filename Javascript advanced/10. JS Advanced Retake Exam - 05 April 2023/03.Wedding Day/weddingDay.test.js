import { assert } from "chai";
import { weddingDay } from "./weddingDay.js";

describe("test suits", function() {

    describe("test PickVenue functionality", function() {
        it("test invalid input", () => {
            assert.throws(() => weddingDay.pickVenue("2", 1, "Kaspichan"), `Invalid Information!`);
            assert.throws(() => weddingDay.pickVenue([2], 1, "Kaspichan"), `Invalid Information!`);

            assert.throws(() => weddingDay.pickVenue(2, "1", "Kaspichan"), `Invalid Information!`);
            assert.throws(() => weddingDay.pickVenue(2, [1], "Kaspichan"), `Invalid Information!`);

            assert.throws(() => weddingDay.pickVenue(2, 1, 1), `Invalid Information!`);
            assert.throws(() => weddingDay.pickVenue(2, 1, ["kaspichan"]), `Invalid Information!`);
        });

        it("test with location differen of Varna", () => {
            assert.throws(() => weddingDay.pickVenue(100, 1, "Kaspichan"), `The location of this venue is not in the correct area!`);
            assert.throws(() => weddingDay.pickVenue(100, 1, "Sofia"), `The location of this venue is not in the correct area!`);
        });

        it("test with valid data", () => {
            assert.equal(weddingDay.pickVenue(150, 120, "Varna"), `This venue meets the requirements, with capacity of 150 guests and 120$ cover.`);
            assert.equal(weddingDay.pickVenue(200, 100, "Varna"), `This venue meets the requirements, with capacity of 200 guests and 100$ cover.`);
        });

        it("test with invalid data", () => {
            assert.equal(weddingDay.pickVenue(149, 120, "Varna"), "This venue does not meet your requirements!");
            assert.equal(weddingDay.pickVenue(200, 121, "Varna"), "This venue does not meet your requirements!");
            assert.equal(weddingDay.pickVenue(1, 200, "Varna"), "This venue does not meet your requirements!");
        });
    });

    describe("test otherSpendings functionality", function() {
        it("test invalid input", () => {
            assert.throws(() => weddingDay.otherSpendings(["flowers"], ["pictures"], 1), "Invalid Information!");
            assert.throws(() => weddingDay.otherSpendings(["flowers"], ["pictures"], "1"), "Invalid Information!");

            assert.throws(() => weddingDay.otherSpendings(1, ["pictures"], true), "Invalid Information!");
            assert.throws(() => weddingDay.otherSpendings("flowers", ["pictures"], true), "Invalid Information!");

            assert.throws(() => weddingDay.otherSpendings(["flowers"], 1, true), "Invalid Information!");
            assert.throws(() => weddingDay.otherSpendings(["flowers"], "pictures", true), "Invalid Information!");
        });

        it("test with discount", () => {
            assert.equal(weddingDay.otherSpendings(["flowers"], ["pictures"], true), `You spend 1020$ for wedding decoration and photography with 15% discount!`);
            assert.equal(weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], true), `You spend 2465$ for wedding decoration and photography with 15% discount!`);
        });

        it("test without discount", () => {
            assert.equal(weddingDay.otherSpendings(["flowers"], ["pictures"], false), `You spend 1200$ for wedding decoration and photography!`);
            assert.equal(weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], false), `You spend 2900$ for wedding decoration and photography!`);
        });
    });

    describe("test tableDistribution functionality", function() {
        it("test less than 6 people on table", () => {
            assert.equal(weddingDay.tableDistribution(10, 2), `There is only 5 people on every table, you can join some tables.`);
            assert.equal(weddingDay.tableDistribution(2, 2), `There is only 1 people on every table, you can join some tables.`);
        });

        it("test less equaor more than 6 people on table", () => {
            assert.equal(weddingDay.tableDistribution(60, 10), `You have 10 tables with 6 guests on table.`);
            assert.equal(weddingDay.tableDistribution(100, 5), `You have 5 tables with 20 guests on table.`);
        });

        it("test with invalid input", () => {
            assert.throws(() => weddingDay.tableDistribution(60, "10"), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution(60, [10]), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution("60", 10), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution([60], 10), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution(0, 10), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution(-1, 10), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution(60, 0), `Invalid Information!`);
            assert.throws(() => weddingDay.tableDistribution(60, -1), `Invalid Information!`);
        });
    });
});