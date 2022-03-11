function getQuestions() {
    return [{
        'text' : 'Please choose the base colour',
        'answers' : [
            { 'text' : 'Black', 'preconditions' : [] },
            { 'text' : 'Blue', 'preconditions' : [] },
            { 'text' : 'Chocolate', 'preconditions' : [] },
            { 'text' : 'Lilac', 'preconditions' : [] },
            { 'text' : 'Cinnamon', 'preconditions' : [] },
            { 'text' : 'Fawn', 'preconditions' : [] },
        ],
        'multiselect' : false,
        'preconditions' : []
    },

    {
        'text' : 'Select any other genes carried by this parent',
        'answers' : [
            { 'text' : 'Dilute', 'preconditions' : [ { 'questionIndex' : 0, 'validAnswerIndices' : [ 0, 2, 4 ] } ] }, //Dilute can only be carried by black, chocolate, cinnamon
            { 'text' : 'Chocolate', 'preconditions' : [ { 'questionIndex' : 0, 'validAnswerIndices' : [ 0, 1 ] } ] }, //Chocolate can only be carried by black or blue
            { 'text' : 'Cinnamon', 'preconditions' : [ { 'questionIndex' : 0, 'validAnswerIndices' : [ 0, 1, 2, 3 ] } ] }, //Cinnamon can only be carried by black, blue, chocolate or lilac
        ],
        'multiselect' : true,
        'preconditions' : []
    },

    {
        'text' : 'This parent is',
        'answers' : [
            { 'text' : 'Tabby', 'preconditions' : [] },
            { 'text' : 'Non-tabby', 'preconditions' : [] },
        ],
        'multiselect' : false,
        'preconditions' : []
    },

    {
        'text' : 'Does this parent carry self?',
        'answers' : [
            { 'text' : 'Yes', 'preconditions' : [] },
            { 'text' : 'No', 'preconditions' : [] },
        ],
        'multiselect' : false,
        'preconditions' : [ { 'questionIndex' : 2, 'validAnswerIndices' : [ 0 ] } ]
    },

    {
        'text' : 'This parent is',
        'answers' : [
            { 'text' : 'Self', 'preconditions' : [] },
            { 'text' : 'Bicolour', 'preconditions' : [] },
            { 'text' : 'Van', 'preconditions' : [] },
        ],
        'multiselect' : false,
        'preconditions' : []
    },

    {
        'text' : 'This parent is',
        'answers' : [
            { 'text' : 'Non-pointed', 'preconditions' : [] },
            { 'text' : 'Colourpoint', 'preconditions' : [] },
        ],
        'multiselect' : false,
        'preconditions' : []
    },

    {
        'text' : 'Does this parent carry colourpoint?',
        'answers' : [
            { 'text' : 'Yes', 'preconditions' : [] },
            { 'text' : 'No', 'preconditions' : [] },
        ],
        'multiselect' : false,
        'preconditions' : [ { 'questionIndex' : 5, 'validAnswerIndices' : [ 0 ] } ]
    }]
}

export {getQuestions}
