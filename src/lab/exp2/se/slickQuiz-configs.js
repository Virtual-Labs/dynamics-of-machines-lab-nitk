
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
     "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The slider crank mechanism coverts rotary motion to __________",                       	
            "a": [
                {"option": "Rotary Motion",      "correct": false},
                {"option": "Cyclodial Motion",     "correct": false},
                {"option": "Linear motion",      "correct": true },
                {"option": "Parabolic motion",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : Linear motion </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many equations in total are formed in the process of finding out the forces on each link?",	
            "a": [
				 {"option": "3",      "correct": false},
                {"option": "6",     "correct": false},
                {"option": "12",      "correct": false },
                {"option": "9",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : 9</p>" // no comma here
        },
         { // Question 3 - Multiple Choice, Single True Answer
            "q": "What is the order of analysis of the four bar linkage?",
            "a": [
                {"option": "Position analysis, Velocity analysis, Dynamic Analysis, Acceleration analysis",      "correct":false},
                {"option": "Dynamic Analysis, Acceleration analysis, Position analysis, Velocity analysis",      "correct":false},
                {"option": "Position analysis, Velocity analysis, Acceleration analysis, Dynamic Analysis",      "correct":true},
                {"option": "Dynamic Analysis, Position analysis, Velocity analysis, Acceleration analysis",      "correct": false}
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : Position analysis, Velocity analysis, Acceleration analysis, Dynamic Analysis</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many degrees of freedom does a slider crank mechanism have?",	
            "a": [
                {"option": "0","correct": false},
				{"option": "1", "correct": true},
                {"option": "2", "correct": false},
				{"option": "3", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans : 1</p>" // no comma here
        },
		
		 { // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many forces are acting on each link due to other links (exclude link 4)?",
            "a": [
			    {"option": "5",	 "correct": false},
				{"option": "3",	 "correct": false},
                {"option": "2",	 "correct": true},
				{"option": "4",	 "correct": false}//no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans :  2</p>" // no comma here
        }
		 // no comma here
    ]
};