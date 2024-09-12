import {assert} from "chai";
import {isOddOrEven} from "../02. isOddOrEven/isOddOrEven.js";
import {describe} from "mocha";

describe("isOddOrEven", () => {
    it("tests with non string input", () => {
        assert.equal(isOddOrEven(4), undefined, "input should be string");
        assert.equal(isOddOrEven({name: "Ivaylo"}), undefined, "input should be string");
        assert.equal(isOddOrEven(["string"]), undefined, "input should be string");
    });

    it("test with string", () => {
        assert.equal(isOddOrEven("string"), "even", "working correctly (even)");
        assert.equal(isOddOrEven("not"), "odd", "working correctly (odd)");

    })
})