function calculateKittens(maternalGenotype, paternalGenotype, genes) {
    let possibleGenotypes = calculatePossibleGenotypes(maternalGenotype, paternalGenotype, genes, 0)
    let possiblePhenotypes = determinePhenotypes(possibleGenotypes)
    return calculateProbabilities(possiblePhenotypes)
}

function calculatePossibleGenotypes (maternalGenotype, paternalGenotype, genes, currentGene) {

}

function determinePhenotypes(possibleGenotypes) {

}

function calculateProbabilities(possiblePhenotypes) {
    
}