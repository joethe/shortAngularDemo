angular.module("main").controller("todoController", function() {
  var todoList = this;
  
  todoList.todos = [
    {item:"attend 3601", done:true},
    {item:"learn angular", done:false},
    {item:"make websites", done:false},
    {item:"??????", done:false},
    {item:"profit", done:false}
  ];
  
  todoList.addTodo = function() {
    console.log("adding an item!");
    todoList.todos.push({item: todoList.todoText, done: false});  // put the new item in the list
    todoList.todoText = ''; // resetting the input field
  };
});
