angular.module("main").controller("todoController", function() {
  var todoList = this;
  
  var todoList.todos = [
    {item:"attend 3601", done:true},
    {item:"learn angular", done:false},
    {item:"make websites", done:false},
    {item:"??????", done:false},
    {item:"profit", done:false}
  ];
  
  todoList.addTodo = function() {
    todoList.todos.push({text: todoList.todoText, done: false});  // put the new item in the list
    todoList.todoText = ''; // resetting the input field
  };
});
