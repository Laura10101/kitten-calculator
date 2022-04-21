/* jshint esversion: 8 */
function calculateKittens(maternalGenotype, paternalGenotype, genes) {
    let possibleGenotypes =
        calculatePossibleGenotypes
        (maternalGenotype, paternalGenotype, genes, 0);

    let possiblePhenotypes =
        determinePhenotypes(possibleGenotypes);
    return calculateProbabilities(possiblePhenotypes);
}

function calculatePossibleGenotypes(
        maternalGenotype,
        paternalGenotype,
        genes,
        currentGene
    ) {
    let possibleGenotypes = [];

    //Calculate all of the possible permutations of
    //mum/dad's alleles for this gene
    let currentGenePermutations =
        calculateGenePermutations(
                maternalGenotype,
                paternalGenotype,
                genes[currentGene]
            );

    //If this is the last gene in the array, stop recursing
    //and instead just return possible permutations for this gene
    if (currentGene === genes.length - 1) {
        return currentGenePermutations;
    }

    //If we aren't on the last gene, then get the
    //permutations for all of the next genes
    let nextGenePermutations =
        calculatePossibleGenotypes
        (maternalGenotype, paternalGenotype, genes, currentGene + 1);

    //Now we can combine the two sets of combinations
    currentGenePermutations.forEach(function (currentGenePermutation) {
        nextGenePermutations.forEach(function (nextGenePermutation) {
            let gene = genes[currentGene];
            let permutation = [];
            let allele = {};
            allele[gene] = currentGenePermutation[0][gene];
            permutation.push(allele);

            allele = {};
            allele[gene] = currentGenePermutation[1][gene];
            permutation.push(allele);
            genes.forEach(function (gene, g) {
                if (g >= currentGene + 1) {
                    permutation[0][gene] = nextGenePermutation[0][gene];
                    permutation[1][gene] = nextGenePermutation[1][gene];
                }
            });
            possibleGenotypes.push(permutation);
        });
    });

    return possibleGenotypes;
}

function calculateGenePermutations(maternalGenotype, paternalGenotype, gene) {
    let permutations = [];

    //Permute mum's two alleles for this gene with dad's two alleles
    let mums = [0, 1];
    let dads = [0, 1];
    mums.forEach(function (m) {
        dads.forEach(function (p) {
            let permutation = [];
            let allele = {};
            allele[gene] = maternalGenotype[m][gene];
            permutation.push(allele);

            allele = {};
            allele[gene] = paternalGenotype[p][gene];
            permutation.push(allele);
            permutations.push(permutation);
        });
    });
    return permutations;
}

function determinePhenotypes(possibleGenotypes) {
    let phenotypes = [];
    possibleGenotypes.forEach(function (genotype) {
        phenotypes.push(determinePhenotype(genotype));
    });
    return phenotypes;
}

function determinePhenotype(genotype) {
    let phenotype = determineColour(
            genotype[0].colour,
            genotype[0].dilute,
            genotype[1].colour,
            genotype[1].dilute
        );

    phenotype += " " + determineTabby(genotype[0].tabby, genotype[1].tabby);

    phenotype += " " + determineColourpoint(
            genotype[0].colourpoint,
            genotype[1].colourpoint
        );

    phenotype += " " + determineWhitespotting(
            genotype[0].whiteSpotting,
            genotype[1].whiteSpotting
        );

    return phenotype.replaceAll(new RegExp("[ ]{2,}", "g"), " ").trim();
}

function determineColour(colour1, dilute1, colour2, dilute2) {
    if (colour1 === "B" || colour2 === "B") {
        if (dilute1 === true && dilute2 === true) {
            return "Blue";
        }
        return "Black";
    }

    if (colour1 === "b" || colour2 === "b") {
        if (dilute1 === true && dilute2 === true) {
            return "Lilac";
        }
        return "Chocolate";
    }

    if (dilute1 === true && dilute2 === true) {
        return "Fawn";
    }
    return "Cinnamon";
}

function determineTabby(tb1, tb2) {
    if (tb1 === true || tb2 === true) {
        return "tabby";
    }
    return "";
}

function determineColourpoint(cp1, cp2) {
    if (cp1 === true && cp2 === true) {
        return "point";
    }
    return "";
}

function determineWhitespotting(ws1, ws2) {
    if (ws1 === true && ws2 === true) {
        return "van";
    }
    if (ws1 === true || ws2 === true) {
        return "bicolour";
    }
    return "";
}

function calculateProbabilities(possiblePhenotypes) {
    let phenotypeProbabilities = {};

    //Get the distinct phenotypes
    let phenotypes = [...new Set(possiblePhenotypes)];

    //For each distinct phenotype, calculate the probability
    //that it occurs in the list of possible phenotypes
    //Set the probability in the object
    phenotypes.forEach(function(phenotype) {
        let frequency = getPhenotypeFrequency(possiblePhenotypes, phenotype);
        let probability = (frequency / possiblePhenotypes.length) * 100;
        phenotypeProbabilities[phenotype] = probability;
    });
    return phenotypeProbabilities;
}

function getPhenotypeFrequency(possiblePhenotypes, phenotype) {
    let count = 0;
    possiblePhenotypes.forEach(function (possiblePhenotype) {
        if (possiblePhenotype === phenotype) {
            count = count + 1;
        }
    });
    return count;
}

module.exports = {
    calculateKittens,
    calculateProbabilities,
    determineColour,
    determineColourpoint,
    determinePhenotype,
    determineTabby,
    determineWhitespotting,
    getPhenotypeFrequency
};
