// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<a href='../index.html'>click here</a> to go to list of Experiments",
        "level1":  "Excellent! You should try another Experiment.",
        "level2":  "That was nice. May be next time you'll get all of them right! Good Luck!",
        "level3":  "Give another try at the simulator. You should be able to pick up few more things this time.",
        "level4":  "Probably you need to build some more understanding about the topic.",
        "level5":  "May be you should spend some more time with the concepts." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How many links are there in a Crank and slotted mechanism",
            "a": [
                {"option": "4",      "correct": false},
                {"option": "3",     "correct": false},
                {"option": "6",      "correct": true},
                {"option": "5",      "correct": false}
                // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:6</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many Sliding elements are present in the mechanism",
            "a": [
                {"option": "1",               "correct":false },
                {"option": "3",   "correct": false},
                {"option": "2",      "correct":true },
                {"option": "None of the above",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br> Correct Answer is : 2 </p>" // no comma here
        },
       { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How many degrees of freedom does this mechanism have",
            "a": [
                 {"option": "2",               "correct":false },
                {"option": "1",   "correct": true},
                {"option": "3",      "correct":false },
                {"option": "4",     "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> <br>Correct Answer Is :1</p>" // no comma here
        },
        { // Question 4
            "q": "What is the order of analysis for the mechanism",
            "a": [
                {"option": "Position, Velocity and Acceleration",               "correct":true },
                {"option": "Velocity, Acceleration and position",   "correct": false},
                {"option": "Position, Acceleration and Velocity ",      "correct":false },
                {"option": "Acceleration, Velocity and Position",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Position, Velocity and Acceleration </p>"  // no comma here
        },
		{ // Question 5
            "q": "Which element does the Coriolis component of acceleration act on",
            "a": [
                {"option": "Slider D",               "correct":true },
                {"option": "Slider A",   "correct": false},
                {"option": "Link OA ",      "correct":false },
                {"option": "Link BC",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer is : Slider D</p>"  // no comma here
        }
    ]
};
