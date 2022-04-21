/* jshint esversion: 8 */
const {determineWhitespotting, determineColourpoint, determineTabby, determineColour, getPhenotypeFrequency, calculateProbabilities, determinePhenotype, calculateKittens} = require("../logic");

describe("Probability calculations", () => {
    describe("Calculate frequencies", () => {
        test("getPhenotypeFrequency returns 3 for [A, B, A, B, C, C, C, B, A], A", () => {
            expect(getPhenotypeFrequency(["A", "B", "A", "B", "C", "C", "C", "B", "A"], "A")).toEqual(3);
        });

        test("getPhenotypeFrequency returns 1 for [X, X, X, X, X, X, X, X, X, X, X, Y, X, X, X, Z, X], Z", () => {
            expect(getPhenotypeFrequency(["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "Y", "X", "X", "X", "Z", "X"], "Z")).toEqual(1);
        });

        test("getPhenotypeFrequency returns 1 for [X, X, X, X, X, X, X, X, X, X, X, Y, X, X, X, Z, X], A", () => {
            expect(getPhenotypeFrequency(["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "Y", "X", "X", "X", "Z", "X"], "A")).toEqual(0);
        });

        test("getPhenotypeFrequency returns 1 for [black, blue, black, cinnamon tabby, cinnamon tabby], cinnamon tabby", () => {
            expect(getPhenotypeFrequency(["black", "blue", "black", "cinnamon tabby", "cinnamon tabby"], "cinnamon tabby")).toEqual(2);
        });

        test("getPhenotypeFrequency returns 10 for [black, black, black, black, black, black, black, black, black, black], black", () => {
            expect(getPhenotypeFrequency(["black", "black", "black", "black", "black", "black", "black", "black", "black", "black"], "black")).toEqual(10);
        });
    });

    describe("Calculate probabilities", () => {
        test("calculateProbabilities returns { 'lilac' : 100 } for [lilac]", () => {
            expect(calculateProbabilities(["lilac"])).toEqual({
                "lilac": 100
            });
        });

        test("calculateProbabilities returns { 'blue' : 50, 'black' : 50 } for [blue, blue, black, black]", () => {
            expect(calculateProbabilities(["blue", "blue", "black", "black"])).toEqual({
                "blue": 50,
                "black": 50
            });
        });

        test("calculateProbabilities returns { 'blue' : 50, 'black' : 25, 'cinnamon' : 25 } for [blue, blue, black, cinnamon]", () => {
            expect(calculateProbabilities(["blue", "blue", "black", "cinnamon"])).toEqual({
                "blue": 50,
                "black": 25,
                "cinnamon": 25
            });
        });

        test("calculateProbabilities returns { 'black tabby' : 50, 'black' : 25, 'fawn' : 12.5, 'chocolate' : 12.5 } for [black tabby, black tabby, black tabby, black tabby, black, black, fawn, chocolate]", () => {
            expect(calculateProbabilities(["black tabby", "black tabby", "black tabby", "black tabby", "black", "black", "fawn", "chocolate"])).toEqual({
                "black tabby": 50,
                "black": 25,
                "fawn": 12.5,
                "chocolate": 12.5
            });
        });
    });
});

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
    describe("Determine phenotype", () => {
        test("BB with no tabby, whitespotting or point determined as 'black'", () => {
            expect(determinePhenotype([
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ])).toEqual("black");
        });

        test("b1b1 with single tabby, but no whitespotting or point determined as 'cinnamon tabby'", () => {
            expect(determinePhenotype([
                {"colour": "b1", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "b1", "dilute": false, "tabby": true, "whiteSpotting": false, "colourpoint": false}
            ])).toEqual("cinnamon tabby");
        });

        test("bb1 with single tabby, and double dilute, pointy, and white spotting as 'lilac tabby point van'", () => {
            expect(determinePhenotype([
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": true, "colourpoint": true},
                {"colour": "b1", "dilute": true, "tabby": true, "whiteSpotting": true, "colourpoint": true}
            ])).toEqual("lilac tabby point van");
        });
    });
});

describe("Calculate kittens", () => {
    test("BB x BB returns { 'black' : 100 }", () => {
        expect(calculateKittens(
            [
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            [
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "B", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            ["colour", "dilute", "tabby", "colourpoint", "whiteSpotting"]
        )).toEqual(
            {
                "black": 100
            }
        );
    });

    test("bb1 Dd aa WSws CSCS x bb dd aa wsws CSCS returns { 'black' : 100 }", () => {
        expect(calculateKittens(
            [
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": true, "colourpoint": false},
                {"colour": "b1", "dilute": false, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            [
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": false, "colourpoint": false},
                {"colour": "b", "dilute": true, "tabby": false, "whiteSpotting": false, "colourpoint": false}
            ],
            ["colour", "dilute", "tabby", "colourpoint", "whiteSpotting"]
        )).toEqual(
            {
                "chocolate": 25,
                "chocolate bicolour": 25,
                "lilac": 25,
                "lilac bicolour": 25
            }
        );
    });
});