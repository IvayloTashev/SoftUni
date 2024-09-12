import { assert } from "chai";
import { lookupChar } from "../03. lookupChar/lookupChar.js";
import { describe } from "mocha";

describe("lookupChar", () => {
    it("testing with valid values", () => {
        assert.equal(lookupChar("correct", 0), "c", "working correctly (c)");
        assert.equal(lookupChar("correct", 6), "t", "working correctly (t)");
        assert.equal(lookupChar("correct", 3), "r", "working correctly (r)");
    });

    it("testing with invalid values", () => {
        assert.equal(lookupChar("asd", "0"), undefined, "input should be string and number");
        assert.equal(lookupChar("asd", "1.2"), undefined, "input should be string and number");
        assert.equal(lookupChar("asd", 1.2), undefined, "input should be string and number");
        assert.equal(lookupChar(111, 2), undefined, "input should be string and number");
    });

    it("testing with incorect index", () => {
        assert.equal(lookupChar("incorrect", -1), "Incorrect index", "number should be integer in range from 0 to string length - 1");
        assert.equal(lookupChar("incorrect", 9), "Incorrect index", "number should be integer in range from 0 to string length - 1");
    });

})