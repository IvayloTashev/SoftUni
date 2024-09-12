import { assert } from "chai";
import { isSymmetric } from "../05. checkForSymmetry/checkForSymmetry.js";
import { describe } from "mocha";

describe("isSymetric", () => {
    it("valid input", () => {
        assert.equal(isSymmetric(["a"]), true, "working correctly");
        assert.equal(isSymmetric([1]), true, "working correctly");
    }); 

    it("valid input", () => {
        assert.equal(isSymmetric(["a", "a"]), true, "working correctly");
        assert.equal(isSymmetric(["a", 1, "a"]), true, "working correctly");
        assert.equal(isSymmetric(["o", "k", "o"]), true, "working correctly");
    }); 

    it("valid input", () => {
        assert.equal(isSymmetric([2, 2, 2, 2]), true, "working correctly");
    }); 

    it("valid input", () => {
        assert.equal(isSymmetric(["a", "a", "a", "a", "a"]), true, "working correctly");
    });

    it("invalid input", () => {
        assert.isFalse(isSymmetric(1), "input must be array");
        assert.isFalse(isSymmetric("a"), "input must be array");
        assert.isFalse(isSymmetric({name: "asd"}), "input must be array");
        assert.isFalse(isSymmetric(undefined), "input must be array");
        assert.isFalse(isSymmetric(null), "input must be array");
        assert.isFalse(isSymmetric([1, 2, 3]), "input must be array");
        assert.isFalse(isSymmetric(["a", "f" ,"k"]), "input must be array");
        assert.isFalse(isSymmetric([1, "f" ,"k"]), "input must be array");
    })
})