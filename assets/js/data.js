function getQuestions() {
    return [{
        "answers": [{
                "geneMapping": [{
                        "gene": "colour",
                        "p1": "B",
                        "p2": "B"
                    },
                    {
                        "gene": "dilute",
                        "p1": false,
                        "p2": false
                    }
                ],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Black"
            },
            {
                "geneMapping": [{
                        "gene": "colour",
                        "p1": "B",
                        "p2": "B"
                    },
                    {
                        "gene": "dilute",
                        "p1": true,
                        "p2": true
                    }
                ],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Blue"
            },
            {
                "geneMapping": [{
                        "gene": "colour",
                        "p1": "b",
                        "p2": "b"
                    },
                    {
                        "gene": "dilute",
                        "p1": false,
                        "p2": false
                    }
                ],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Chocolate"
            },
            {
                "geneMapping": [{
                        "gene": "colour",
                        "p1": "b",
                        "p2": "b"
                    },
                    {
                        "gene": "dilute",
                        "p1": true,
                        "p2": true
                    }
                ],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Lilac"
            },
            {
                "geneMapping": [{
                        "gene": "colour",
                        "p1": "b1",
                        "p2": "b1"
                    },
                    {
                        "gene": "dilute",
                        "p1": false,
                        "p2": false
                    }
                ],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Cinnamon"
            },
            {
                "geneMapping": [{
                        "gene": "colour",
                        "p1": "b1",
                        "p2": "b1"
                    },
                    {
                        "gene": "dilute",
                        "p1": true,
                        "p2": true
                    }
                ],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Fawn"
            }
        ],
        "multiselect": false,
        "preconditions": [],
        "text": "Please choose the base colour"
    },
    {
        "answers": [{
                "geneMapping": [{
                    "gene": "dilute",
                    "p2": true
                }],
                "image" : "blue-self-draft",
                "preconditions": [{
                    "questionIndex": 0,
                    "validAnswerIndices": [
                        0,
                        2,
                        4
                    ]
                }],
                "text": "Dilute"
            },
            {
                "geneMapping": [{
                    "gene": "colour",
                    "p2": "b"
                }],
                "image" : "blue-self-draft",
                "preconditions": [{
                    "questionIndex": 0,
                    "validAnswerIndices": [
                        0,
                        1
                    ]
                }],
                "text": "Chocolate"
            },
            {
                "geneMapping": [{
                    "gene": "colour",
                    "p2": "b1"
                }],
                "image" : "blue-self-draft",
                "preconditions": [{
                    "questionIndex": 0,
                    "validAnswerIndices": [
                        0,
                        1,
                        2,
                        3
                    ]
                }],
                "text": "Cinnamon"
            }
        ],
        "multiselect": true,
        "preconditions": [],
        "text": "Select any other genes carried by this parent"
    },
    {
        "answers": [{
                "geneMapping": [{
                    "gene": "tabby",
                    "p1": true,
                    "p2": true
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Tabby"
            },
            {
                "geneMapping": [{
                    "gene": "tabby",
                    "p1": false,
                    "p2": false
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Non-tabby"
            }
        ],
        "multiselect": false,
        "preconditions": [],
        "text": "This parent is"
    },
    {
        "answers": [{
                "geneMapping": [{
                    "gene": "tabby",
                    "p2": false
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Yes"
            },
            {
                "geneMapping": [{
                    "gene": "tabby",
                    "p2": true
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "No"
            }
        ],
        "multiselect": false,
        "preconditions": [{
            "questionIndex": 2,
            "validAnswerIndices": [
                0
            ]
        }],
        "text": "Does this parent carry self?"
    },
    {
        "answers": [{
                "geneMapping": [{
                    "gene": "whiteSpotting",
                    "p1": false,
                    "p2": false
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Self"
            },
            {
                "geneMapping": [{
                    "gene": "whiteSpotting",
                    "p1": true,
                    "p2": false
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Bicolour"
            },
            {
                "geneMapping": [{
                    "gene": "whiteSpotting",
                    "p1": true,
                    "p2": true
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Van"
            }
        ],
        "multiselect": false,
        "preconditions": [],
        "text": "This parent is"
    },
    {
        "answers": [{
                "geneMapping": [{
                    "gene": "colourpoint",
                    "p1": false,
                    "p2": false
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Non-pointed"
            },
            {
                "geneMapping": [{
                    "gene": "colourpoint",
                    "p1": true,
                    "p2": true
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Colourpoint"
            }
        ],
        "multiselect": false,
        "preconditions": [],
        "text": "This parent is"
    },
    {
        "answers": [{
                "geneMapping": [{
                    "gene": "colourpoint",
                    "p2": true
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "Yes"
            },
            {
                "geneMapping": [{
                    "gene": "colourpoint",
                    "p2": false
                }],
                "image" : "blue-self-draft",
                "preconditions": [],
                "text": "No"
            }
        ],
        "multiselect": false,
        "preconditions": [{
            "questionIndex": 5,
            "validAnswerIndices": [
                0
            ]
        }],
        "text": "Does this parent carry colourpoint?"
    }
];
}

function getGenes() {
    return ["colour", "dilute", "tabby", "colourpoint", "whiteSpotting"];
}

//For simplicity, I will calculate mum and dad's genotypes from scratch every time we go backwards of forwards. 
//This function will calculate the blank/default genotypes which are then modified by each answer, which ensures that the JSON object is constructed properly.
function getDefaultGenotypes () {
    return {
        "mum" : [
            {
                "colour" : "B",
                "dilute" : false,
                "tabby" : false,
                "colourpoint" : false,
                "whiteSpotting" : false
            },
            {
                "colour" : "B",
                "dilute" : false,
                "tabby" : false,
                "colourpoint" : false,
                "whiteSpotting" : false
            }
        ], 
        "dad" : [
            {
                "colour" : "B",
                "dilute" : false,
                "tabby" : false,
                "colourpoint" : false,
                "whiteSpotting" : false
            },
            {
                "colour" : "B",
                "dilute" : false,
                "tabby" : false,
                "colourpoint" : false,
                "whiteSpotting" : false
            }
        ]
    }
}