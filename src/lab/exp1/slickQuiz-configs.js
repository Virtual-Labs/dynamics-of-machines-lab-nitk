
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
            "q": "Unbalancing is cause of vibration",
            "a": [
                {"option": "True",      "correct":true},
                {"option": "False",      "correct": false}
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True.</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following statements is correct about the balancing of a mechanical system?",
            "a": [
                {"option": "If it is under static balance, then there will be dynamic balance also","correct": false},
				{"option": "If it is under dynamic balance, then there will be static balance also", "correct": false},
                {"option": "Both static as well as dynamic balance have to be achieved separately", "correct": true},
				{"option": "None of the mentioned", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Both static as well as dynamic balance have to be achieved separately.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following conditions should be satisfied for complete balancing of multi-cylinder inline engines?  ",
            "a": [
                {"option": "Primary couples should be balanced ",  "correct": false},
                {"option": "Secondary couples should be balanced",  "correct": true},
				{"option": "Both a and b ",  "correct": false},
				{"option": "None of the above",  "correct": false}
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Secondary couples should be balanced</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following statements are associated with complete dynamic balancing of rotating systems?<br/>&nbsp;&nbsp;1) Resultant couple due to all inertia forces is zero.<br/>&nbsp;&nbsp;2) Support reactions due to forces are zero but not due to couples.<br/>&nbsp;&nbsp;3) The system is automatically statically balanced.<br/>&nbsp;&nbsp;4) Centre of masses of the system lies on the axis of rotation.",
            "a": [
                {"option": "1, 2, 3 and 4","correct": false},
                {"option": "1, 3 and 4 only", "correct": true},
				{"option": "2, 3 and 4 only", "correct": false},
				{"option": "1, 2, and 3 only", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:1, 3 and 4 only</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following conditions should be satisfied for static balancing?<br/>&nbsp;&nbsp;1) Dynamic forces acting on the system should be zero<br/>&nbsp;&nbsp;2) Couple acting on the system due to dynamic force should be zero <br/>&nbsp;&nbsp;3) Centrifugal forces acting on the system should be zero<br/>&nbsp;&nbsp;4) Couple acting on the system due to centrifugal forces should be zero",
            "a": [
                {"option": "Condition 1 and condition 2","correct": false},
                {"option": "Condition 1 and condition 3 ", "correct": false},
				{"option": "Condition 3 and condition 4", "correct": true},
				{"option": "All of the above", "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Condition 3 and condition 4</p>" // no comma here
        }
        
   
    ]
};
