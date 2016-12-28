/* List controller
This shows data structures information at index page */
(function(){
 angular
 .module("dataFacts")
 .controller("listCtrl", ListController);
 ListController.$inject = ['quizMetrics','DataService'];

/* List Controller holds data structure information */

 function ListController(quizMetrics,DataService)
 {
 this.quizMetrics = quizMetrics;
 this.DataService = DataService;

this.data = DataService.DataStructures;
this.activeStruct = {};
this.changeActiveStruct = changeActiveStruct;
this.search="";
this.activateQuiz = activateQuiz;

function changeActiveStruct(index)
{
this.activeStruct = index;


}
/* This makes quiz controller visible */
function activateQuiz()
{
quizMetrics.changeState("quiz",true);

}

} 

})();

































