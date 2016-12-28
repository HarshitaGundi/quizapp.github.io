/* DataService hold quiz data in JSON format */
(function()
{
angular
.module("dataFacts")
.factory("DataService",DataService);

  function DataService()
  {

  var correctAnswers = [2,1,0,2,1,0,1,1,2,2]
    
     var quizQuestions = [
     {
       text: " What data structure is used for breadth first traversal of a graph?",
         possibilities: [
                {
                    answer: "Queue"
                },
                {
                    answer: "Stack"
                },
                {
                    answer: "List"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
       text: " What is Last in First Out",
         possibilities: [
                {
                    answer: "Queue"
                },
                {
                    answer: "Stack"
                },
                {
                    answer: "List"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
           {
       text: " What is First in First Out",
         possibilities: [
                {
                    answer: "Queue"
                },
                {
                    answer: "Stack"
                },
                {
                    answer: "List"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
         text: " Which of these use Key value pairs",
         possibilities: [
                {
                    answer: "Queue"
                },
                {
                    answer: "Stack"
                },
                {
                    answer: "Hash Maps"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
         text: " Which of these does not allow duplicate values?",
         possibilities: [
                {
                    answer: "Queue"
                },
                {
                    answer: "Sets"
                },
                {
                    answer: "Hash Maps"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },

         {
         text: " Which of these implement List interface?",
         possibilities: [
                {
                    answer: "ArrayList"
                },
                {
                    answer: "Sets"
                },
                {
                    answer: "Hash Maps"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
         text: " Which of these support dynamic memory allocation?",
         possibilities: [
                {
                    answer: "ArrayList"
                },
                {
                    answer: "Linked Lists"
                },
                {
                    answer: "Hash Maps"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },

        {
       
          text: "Iterator is implemented following interface",
         possibilities: [
                {
                    answer: "Graphs"
                },
                {
                    answer: "Iterator"
                },
                {
                    answer: "Hash Maps"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
      
        {
       
          text: "Following data structure is synchronized",
         possibilities: [
                {
                    answer: "Graphs"
                },
                {
                    answer: "Iterator"
                },
                {
                    answer: "Hash Tables"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        },
         {
       
          text: "Which of the following datastructure allows fastest search?",
         possibilities: [
                {
                    answer: "Graphs"
                },
                {
                    answer: "Iterator"
                },
                {
                    answer: "Hash Maps"
                },
                {
                    answer: "None of the above"
                }
            ],
            selected: null,
            correct: null
        }
        ]

var datastructures = [{
 
name : "Arrays",
imageurl : "http://2.bp.blogspot.com/_ynkoLGkpwXY/TFV2iMt48vI/AAAAAAAAAlY/WzmaDdkJP6M/s1600/c-array-1d-ex.jpg",
content: "Java provides a data structure, the array, which stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.Instead of declaring individual variables, such as number0, number1, ..., and number99, you declare one array variable such as numbers and use numbers[0], numbers[1], and ..., numbers[99] to represent individual variables."
},

{
 
 name : "Arraylist",
 imageurl :"https://www.cs.sfu.ca/~tamaras/arrays/img7.png",
 content : "The ArrayList class extends AbstractList and implements the List interface. ArrayList supports dynamic arrays that can grow as needed. Standard Java arrays are of a fixed length. After arrays are created, they cannot grow or shrink, which means that you must know in advance how many elements an array will hold."
},

{
 
name:"LinkedList",
imageurl : "http://www.csegeek.com/csegeek/view/tutorials/algorithms/linked_list/linked_list.jpg",
content : "The LinkedList class implements the List interface. All the operations defined in the List interface are thus supported by the LinkedList class. In addition to those operations, the LinkedList class provides the methods to insert, delete,and retrieve elements from the beginning and end of the list. These operations allow a LinkedList to be used forimplementing the stack, queue, and double­ ended­queue (Deque) data structures"
},
{
name:"Stack",
imageurl:"http://cfile30.uf.tistory.com/image/221C173B5741AF0B247101",
content: "In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed."
},

{
 name:"Queue",
 imageurl:"http://scanftree.com/Data_Structure/queues.png",
 content : "A queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle. An excellent example of a queue is a line of students in the food court of the UC. New additions to a line made to the back of the queue, while removal (or serving) happens in the front. In the queue only two operations are allowed enqueue and dequeue. Enqueue means to insert an item into the back of the queue, dequeue means removing the front item"
},


{
 name:"Hashmap",
 imageurl:"http://www.itcuties.com/wp-content/uploads/2013/04/ITCuties-Java-HashMap.png",
 content: "Hash table based implementation of the Map interface. This implementation provides all of the optional map operations, and permits null values and the null key. (The HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls"

},
{

name :"Trees",
imageurl:" http://farm6.static.flickr.com/5141/5690375880_0cbd48a944_o.png",
content : "Tree is a widely used abstract data type (ADT)—or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes."
},

{

name:"Graphs",
imageurl: "https://courses.cs.vt.edu/csonline/DataStructures/Lessons/Graphs/graph.gif",
content : "A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph."



}

] ;
    var dataObj = {

     	DataStructures :datastructures,
     	quizQuestions :quizQuestions,
        correctAnswers : correctAnswers
     };

     return dataObj;
     }



})();