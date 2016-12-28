(function()
{
	
   angular
       .module("dataFacts")
       .controller("quizCtrl", QuizController);
      /* Injects quizMetrics and DataService services */
      QuizController.$inject = ['quizMetrics','DataService'];

    function QuizController(quizMetrics,DataService)
    {
     this.quizMetrics =  quizMetrics;
     this.DataService = DataService;
     this.questionAnswered = questionAnswered;
     this.activeQuestion = 0;
     this.setActiveQuestion = setActiveQuestion;
     this.selectAnswer = selectAnswer;
     var numQuestionsAnswered = 0;
     this.error = false;
     this.finalise = false;
     this.finaliseAnswers = finaliseAnswers;

    function setActiveQuestion()
    {
       var breakOut = false;
       var quizLength = DataService.quizQuestions.length -1;

           while(!breakOut)
           {
           	this.activeQuestion = this.activeQuestion < quizLength?++this.activeQuestion:0;
           	  if(this.activeQuestion === 0)
           	  {
           	  	this.error = true;
           	  }
            
             if(DataService.quizQuestions[this.activeQuestion].selected === null)
             {

             	breakOut = true;
             }
           }

    }
        
     /* Checks questions answeres */
     function questionAnswered()
     {
     		var quizLength = DataService.quizQuestions.length;

     	if(DataService.quizQuestions[this.activeQuestion].selected !== null)
     	{
     	     /* Incrementing answered questions */
           numQuestionsAnswered ++;
           if(numQuestionsAnswered >= quizLength)
           {
                 // Finalise the quiz
                 for(var i = 0;i<quizLength;i++)
                 {
                 	if(DataService.quizQuestions[i].selected == null)
                 	{
                 		setActiveQuestion (i);
                 		return;
                 	}
                 }
                 this.error = false;
                 this.finalise = true;
                 return;

           }

     	}


          this.setActiveQuestion();

     }


     /* Checks selected answer */
     function selectAnswer(index)
     {

     	DataService.quizQuestions[this.activeQuestion].selected = index;
     }

 /* finalises answers */
      function finaliseAnswers()
      {
    
		this.finalise = false;
		numQuestionsAnswered = 0;
		this.activeQuestion = 0;
		quizMetrics.markQuiz();
		quizMetrics.changeState("quiz",false);
		quizMetrics.changeState("results",true);


         }

  
}


})();