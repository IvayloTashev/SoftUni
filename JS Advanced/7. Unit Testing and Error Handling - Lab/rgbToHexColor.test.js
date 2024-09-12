import { Assertion, assert } from "chai";
import { rgbToHexColor } from "../06. RGBToHex/rgbToHexColor.js";
import { describe } from "mocha";

describe("rgbToHexColor", () => {
    it("test with valid input", () => {
        assert.equal(rgbToHexColor(1, 2, 3), "#010203", "working correctly")
        assert.equal(rgbToHexColor(0, 7, 18), "#000712", "working correctly")
        assert.equal(rgbToHexColor(100, 200, 255), "#64C8FF", "working correctly")
    });

    it("test with invalid input", () => {
        assert.isUndefined(rgbToHexColor([]), "input must be 3 integers from 0 to 255");
        assert.isUndefined(rgbToHexColor({}), "input must be 3 integers from 0 to 255");
        assert.isUndefined(rgbToHexColor(-1, 1, 1), "input must be 3 integers from 0 to 255");
        assert.isUndefined(rgbToHexColor(1, 1, 300), "input must be 3 integers from 0 to 255");
        assert.isUndefined(rgbToHexColor(1.2, 1.3, 1.4), "input must be 3 integers from 0 to 255");
    })

})