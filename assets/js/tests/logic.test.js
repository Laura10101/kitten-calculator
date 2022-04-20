const { determineWhitespotting, determineColourpoint } = require("../logic");

describe("Determining phenotypes", () => {
    describe("Determine white spotting", () => {
        test("true and true for white spotting returns van", () => {
            expect(determineWhitespotting(true, true)).toEqual("van");
        });
        test("true and false for white spotting returns bicolour", () => {
            expect(determineWhitespotting(true, false)).toEqual("bicolour");
        });
        test("false and true for white spotting returns bicolour", () => {
            expect(determineWhitespotting(false, true)).toEqual("bicolour");
        });
        test("false and false for white spotting returns ''", () => {
            expect(determineWhitespotting(false, false)).toEqual("");
        });
    });
    describe("Determine colourpoint", () => {
        test("true and true for white spotting returns van", () => {
            expect(determineWhitespotting(true, true)).toEqual("van");
        });
        test("true and false for white spotting returns bicolour", () => {
            expect(determineWhitespotting(true, false)).toEqual("bicolour");
        });
        test("false and true for white spotting returns bicolour", () => {
            expect(determineWhitespotting(false, true)).toEqual("bicolour");
        });
        test("false and false for white spotting returns ''", () => {
            expect(determineWhitespotting(false, false)).toEqual("");
        });
    });
});