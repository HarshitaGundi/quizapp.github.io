/* Results controller contains quiz metrics information */
(function()
{
angular
      .module("dataFacts")
       .controller("resultsCtrl", ResultsController);
	
     ResultsController.$inject = ['quizMetrics','DataService'];
   
   function ResultsController(quizMetrics,DataService)
   {
  this.quizMetrics = quizMetrics;
  this.DataService = DataService;
  this.setActiveQuestion = setActiveQuestion;
  this.reset = reset;
  this.activeQuestion = 0;
  this.calculatePerc = calculatePerc;
  /* Sets active question */
  function setActiveQuestion(index)
  {
    this.activeQuestion = index;
  }
  function calculatePerc()
  {
 return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
  }
  
  /* Reset intilises quiz data */
   function reset()
   {

    quizMetrics.changeState("results", false);
    quizMetrics.numCorrect = 0;
 
    for(var i = 0; i < DataService.quizQuestions.length; i++){
        var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean
        data.selected = null;
        data.correct = null;
    }




   }
}

})();