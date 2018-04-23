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
            "q": "What is the Grashof linkage criterion?",                       	
            "a": [
                {"option": "s+l&gt;p+q",      "correct": false},
                {"option": "s+p&gt;l+q",     "correct": false},
                {"option": "s+l&lt;p+q",      "correct": true },
                {"option": "s+p&lt;l+q",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans : s+l&lt;p+q </p>" // no comma here
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
        
		
		 { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many forces are acting on each link due to other links?",
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
