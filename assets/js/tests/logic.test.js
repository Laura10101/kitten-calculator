/*jslint es6 */
const {determineWhitespotting, determineColourpoint, determineTabby, determineColour} = require("../logic");

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
        test("true and true for colourpoint returns point", () => {
            expect(determineColourpoint(true, true)).toEqual("point");
        });
        test("true and false for colourpoint returns ''", () => {
            expect(determineColourpoint(true, false)).toEqual("");
        });
        test("false and true for colourpoint returns ''", () => {
            expect(determineColourpoint(false, true)).toEqual("");
        });
        test("false and false for colourpoint returns ''", () => {
            expect(determineColourpoint(false, false)).toEqual("");
        });
    });
    describe("Determine tabby", () => {
        test("true and true for tabby returns tabby", () => {
            expect(determineTabby(true, true)).toEqual("tabby");
        });
        test("true and false for tabby returns tabby", () => {
            expect(determineTabby(true, false)).toEqual("tabby");
        });
        test("false and true for colourpoint returns tabby", () => {
            expect(determineTabby(false, true)).toEqual("tabby");
        });
        test("false and false for tabby returns ''", () => {
            expect(determineTabby(false, false)).toEqual("");
        });
    });
    describe("Determine colour", () => {
        //Test Black gene
        test("B, false, B, false for colour returns black", () => {
            expect(determineColour("B", false, "B", false)).toEqual("black");
        });

        test("B, false, B, true for colour returns black", () => {
            expect(determineColour("B", false, "B", true)).toEqual("black");
        });

        test("B, true, B, false for colour returns black", () => {
            expect(determineColour("B", true, "B", false)).toEqual("black");
        });

        test("B, true, B, true for colour returns blue", () => {
            expect(determineColour("B", true, "B", true)).toEqual("blue");
        });

        test("B, false, b, false for colour returns black", () => {
            expect(determineColour("B", false, "b", false)).toEqual("black");
        });

        test("B, false, b, true for colour returns black", () => {
            expect(determineColour("B", false, "b", true)).toEqual("black");
        });

        test("B, true, b, false for colour returns black", () => {
            expect(determineColour("B", true, "b", false)).toEqual("black");
        });

        test("B, true, b, true for colour returns blue", () => {
            expect(determineColour("B", true, "b", true)).toEqual("blue");
        });

        test("b, false, B, false for colour returns black", () => {
            expect(determineColour("b", false, "B", false)).toEqual("black");
        });

        test("b, false, B, true for colour returns black", () => {
            expect(determineColour("b", false, "B", true)).toEqual("black");
        });

        test("b, true, B, false for colour returns black", () => {
            expect(determineColour("b", true, "B", false)).toEqual("black");
        });

        test("b, true, B, true for colour returns blue", () => {
            expect(determineColour("b", true, "B", true)).toEqual("blue");
        });

        test("B, false, b1, false for colour returns black", () => {
            expect(determineColour("B", false, "b1", false)).toEqual("black");
        });

        test("B, false, b1, true for colour returns black", () => {
            expect(determineColour("B", false, "b1", true)).toEqual("black");
        });

        test("B, true, b1, false for colour returns black", () => {
            expect(determineColour("B", true, "b1", false)).toEqual("black");
        });

        test("B, true, b1, true for colour returns blue", () => {
            expect(determineColour("B", true, "b1", true)).toEqual("blue");
        });

        test("b1, false, B, false for colour returns black", () => {
            expect(determineColour("b1", false, "B", false)).toEqual("black");
        });

        test("b1, false, B, true for colour returns black", () => {
            expect(determineColour("b1", false, "B", true)).toEqual("black");
        });

        test("b1, true, B, false for colour returns black", () => {
            expect(determineColour("b1", true, "B", false)).toEqual("black");
        });

        test("b1, true, B, true for colour returns blue", () => {
            expect(determineColour("b1", true, "B", true)).toEqual("blue");
        });

        //Test chocolate
        test("b, false, b, false for colour returns chocolate", () => {
            expect(determineColour("b", false, "b", false)).toEqual("chocolate");
        });

        test("b, true, b, false for colour returns chocolate", () => {
            expect(determineColour("b", true, "b", false)).toEqual("chocolate");
        });

        test("b, false, b, true for colour returns chocolate", () => {
            expect(determineColour("b", false, "b", true)).toEqual("chocolate");
        });

        test("b, true, b, true for colour returns lilac", () => {
            expect(determineColour("b", true, "b", true)).toEqual("lilac");
        });

        test("b, false, b1, false for colour returns chocolate", () => {
            expect(determineColour("b", false, "b1", false)).toEqual("chocolate");
        });

        test("b, true, b1, false for colour returns chocolate", () => {
            expect(determineColour("b", true, "b1", false)).toEqual("chocolate");
        });

        test("b, false, b1, true for colour returns chocolate", () => {
            expect(determineColour("b", false, "b1", true)).toEqual("chocolate");
        });

        test("b, true, b1, true for colour returns lilac", () => {
            expect(determineColour("b", true, "b1", true)).toEqual("lilac");
        });

        test("b1, false, b, false for colour returns chocolate", () => {
            expect(determineColour("b1", false, "b", false)).toEqual("chocolate");
        });

        test("b1, true, b, false for colour returns chocolate", () => {
            expect(determineColour("b1", true, "b", false)).toEqual("chocolate");
        });

        test("b1, false, b, true for colour returns chocolate", () => {
            expect(determineColour("b1", false, "b", true)).toEqual("chocolate");
        });

        test("b1, true, b, true for colour returns lilac", () => {
            expect(determineColour("b1", true, "b", true)).toEqual("lilac");
        });

        //Test cinnammon
        test("b1, false, b1, false for colour returns cinnamon", () => {
            expect(determineColour("b1", false, "b1", false)).toEqual("cinnamon");
        });

        test("b1, true, b1, false for colour returns cinnamon", () => {
            expect(determineColour("b1", true, "b1", false)).toEqual("cinnamon");
        });

        test("b1, false, b1, true for colour returns cinnamon", () => {
            expect(determineColour("b1", false, "b1", true)).toEqual("cinnamon");
        });

        test("b1, true, b1, true for colour returns fawn", () => {
            expect(determineColour("b1", true, "b1", true)).toEqual("fawn");
        });
    });
});