function calculateKittens(maternalGenotype, paternalGenotype, genes) {
    let possibleGenotypes = calculatePossibleGenotypes(maternalGenotype, paternalGenotype, genes, 0)
    let possiblePhenotypes = determinePhenotypes(possibleGenotypes)
    return calculateProbabilities(possiblePhenotypes)
}

function calculatePossibleGenotypes (maternalGenotype, paternalGenotype, genes, currentGene) {
    let possibleGenotypes = []

    //Calculate all of the possible permutations of mum/dad's alleles for this gene
    currentGenePermutations = calculateGenePermutations(maternalGenotype, paternalGenotype, genes[currentGene]);

    //If this is the last gene in the array, stop recursing and instead just return possible permutations for this gene
    if (currentGene == genes.length - 1) return currentGenePermutations;

    //If we aren't on the last gene, then get the permutations for all of the next genes
    nextGenePermutations = calculatePossibleGenotypes(maternalGenotype, paternalGenotype, genes, currentGene + 1);

    //Now we can combine the two sets of combinations
    for (let c = 0; c < currentGenePermutations.length; c++) {
        for (let n = 0; n < nextGenePermutations.length; n++) {
            let gene = genes[currentGene];
            let permutation = [
                { gene : currentGenePermutations[c][0][gene] },
                { gene : currentGenePermutations[c][1][gene] }
            ]
            for (let g = currentGene + 1; g < genes.length; g++) {
                gene = genes[g];
                permutation[0][gene] = nextGenePermutations[n][0][gene];
                permutation[1][gene] = nextGenePermutations[n][1][gene];
            }
            possibleGenotypes.push(permutation)
        }
    }

    return possibleGenotypes;
}

function calculateGenePermutations(maternalGenotype, paternalGenotype, gene) {
    let permutations = []

    //Permute mum's two alleles for this gene with dad's two alleles
    for (let m = 0; m < 2; m++) {
        for (let d = 0; d < 2; d++) {
            let permutation = [
                { gene : maternalGenotype[m][gene] },
                { gene : paternalGenotype[p][gene] }
            ]
            permutations.push(permutation)
        }
    }
    return permutations
}

function determinePhenotypes(possibleGenotypes) {
    let phenotypes = []
    for (let i = 0; i < possibleGenotypes.length; i++) {
        phenotypes.push(determinePhenotype(possibleGenotypes[i]));
    }
    return phenotypes;
}

function determinePhenotype(genotype) {
    let phenotype = determineColour(genotype[0]['colour'], genotype[0]['dilute'], genotype[1]['colour'], genotype[1]['dilute']);

    phenotype += " " + determineTabby(genotype[0]['tabby'], genotype[1]['tabby']);
    phenotype += " " + determineColourpoint(genotype[0]['colourpoint'], genotype[1]['colourpoint']);
    phenotype += " " + determineWhitespotting(genotype[0]['whiteSpotting'], genotype[1]['whiteSpotting']);

    return phenotype;
}

function determineColour(colour1, dilute1, colour2, dilute2) {
    if (colour1 == 'B' || colour2 == 'B') {
        if (dilute1 == true && dilute2 == true) return 'blue';
        return 'black';
    }

    if (colour1 == 'b' || colour2 == 'b') {
        if (dilute1 == true && dilute2 == true) return 'lilac';
        return 'chocolate';
    }

    if (dilute1 == true && dilute2 == true) return 'fawn';
    return 'cinnamon';
}

function determineTabby(tb1, tb2) {
    if (tb1 == true || tb2 == true) return 'tabby';
    return '';
}

function determineColourpoint(cp1, cp2) {
    if (cp1 == true && cp2 == true) return 'colourpoint';
    return '';
}

function determineWhitespotting(ws1, ws2) {
    if (ws1 == true && ws2 == true) return 'high white';
    if (ws1 == true || ws2 == true) return 'bicolour';
    return 'self';
}

function calculateProbabilities(possiblePhenotypes) {
    
}