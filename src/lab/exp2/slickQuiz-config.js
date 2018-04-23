// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys
//quiz
var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
		
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Rotation in different planes require the balancing of",                       	
            "a": [
                {"option": "Force  ",      "correct": false},
                {"option": "Moment ",     "correct": false},
                {"option": "Both",      "correct": true },
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : Both</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Cause of unbalance",	
            "a": [
				 {"option": "Moment of inertia",      "correct": false},
                {"option": "Angular of Velocity",     "correct": false},
                {"option": "Large diameter of rotor",      "correct": false },
                {"option": "Eccentricity",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Eccentricity</p>" // no comma here
        },
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Gear box is the example of",
            "a": [
			    {"option": "Balancing in one plane",	 "correct": false},
				{"option": "Reciprocating balancing",	 "correct": false},
                {"option": "Balancing in different plane",	 "correct": true},
				{"option": "None of these ",	 "correct": false}//no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Balancing in different plane</p>" // no comma here
        },
		 { // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Balancing of multiple mass in multiple plane the net force and moment should be",
            "a": [
                {"option": "Net force > net moment", "correct": false},
				{"option": "Net moment > net force", "correct": false},
				{"option": "Net force = 0, net moment &ne; 0", "correct": false},				
                {"option": "Net force = 0, net moment = 0", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Net force = 0, net moment = 0</p>" // no comma here
        },
		
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which statement correct for dynamic balancing",
            "a": [
                {"option": "The centre of gravity of the system of masses lie on the axis of rotation.",	 "correct": false},
				{"option": "Any resultant centrifugal force or couple does not exist",	 "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:Any resultant centrifugal force or couple does not exist</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following factors are not responsible for unbalancing in rotating systems?",
            "a": [
                {"option": "Errors", "correct": false},
				{"option": "Tolerances", "correct": false},
				{"option": "Shape of the rotor", "correct": false},				
                {"option": "None of the above", "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:None of the above</p>" // no comma here
        }
		
   // no comma here
    ]
};
