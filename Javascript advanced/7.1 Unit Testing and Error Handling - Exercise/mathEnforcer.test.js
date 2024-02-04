import { assert } from "chai";
import { mathEnforcer } from "../04. mathEnforcer/mathEnforcer.js";
import { describe } from "mocha";

describe("addFive", () => {
    it("testing with valid values", () => {
        assert.equal(mathEnforcer.addFive(5), 10, "working correctly");
        assert.equal(mathEnforcer.addFive(0), 5, "working correctly");
        assert.equal(mathEnforcer.addFive(-5), 0, "working correctly");
        assert.equal(mathEnforcer.addFive(-5.5), -0.5, "working correctly");
    });

    it("testing with invalid values", () => {
        assert.isUndefined(mathEnforcer.addFive([]), "input should be a number");
        assert.isUndefined(mathEnforcer.addFive({}), "input should be a number");
        assert.isUndefined(mathEnforcer.addFive("str"), "input should be a number");
        assert.isUndefined(mathEnforcer.addFive("5"), "input should be a number");
    });

});

describe("subtractTen", () => {
    it("testing with valid values", () => {
        assert.equal(mathEnforcer.subtractTen(20), 10, "working correctly");
        assert.equal(mathEnforcer.subtractTen(10), 0, "working correctly");
        assert.equal(mathEnforcer.subtractTen(-5), -15, "working correctly");
        assert.equal(mathEnforcer.subtractTen(20.5), 10.5, "working correctly");
    });

    it("testing with invalid values", () => {
        assert.isUndefined(mathEnforcer.subtractTen([]), "input should be a number");
        assert.isUndefined(mathEnforcer.subtractTen({}), "input should be a number");
        assert.isUndefined(mathEnforcer.subtractTen("str"), "input should be a number");
        assert.isUndefined(mathEnforcer.subtractTen("5"), "input should be a number");
    });

});

describe("sum", () => {
    it("testing with valid values", () => {
        assert.equal(mathEnforcer.sum(0, 5), 5, "working correctly");
        assert.equal(mathEnforcer.sum(-5, 5), 0, "working correctly");
        assert.equal(mathEnforcer.sum(0.5, 5), 5.5, "working correctly");
        assert.equal(mathEnforcer.sum(0.5, 5.5), 6, "working correctly");
    });

    it("testing with invalid values", () => {
        assert.isUndefined(mathEnforcer.sum([], []), "input should be a number");
        assert.isUndefined(mathEnforcer.sum([]), "input should be a number");
        assert.isUndefined(mathEnforcer.sum({}, {}), "input should be a number");
        assert.isUndefined(mathEnforcer.sum("str", "str"), "input should be a number");
        assert.isUndefined(mathEnforcer.sum("str"), "input should be a number");
        assert.isUndefined(mathEnforcer.sum("str", 4), "input should be a number");
        assert.isUndefined(mathEnforcer.sum(4, "str"), "input should be a number");
        assert.isUndefined(mathEnforcer.sum("str", 4.4), "input should be a number");
        assert.isUndefined(mathEnforcer.sum(4.4, "str"), "input should be a number");
        assert.isUndefined(mathEnforcer.sum("5", "4"), "input should be a number");
    });

});