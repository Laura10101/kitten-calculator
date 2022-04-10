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

}

function calculateProbabilities(possiblePhenotypes) {
    
}