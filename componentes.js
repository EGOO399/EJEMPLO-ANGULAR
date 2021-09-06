
    //NgModules . Los NgModules son contenedores para un bloque cohesivo de
    // código dedicado a un dominio de aplicación, un flujo de trabajo o un 
    //conjunto de capacidades estrechamente relacionadas. Pueden contener componentes, 
    //proveedores de servicios y otros archivos de código cuyo alcance está definido por el
    // NgModule que los contiene
    angular.module('todoApp', [])
    .controller('TodoListController', function() {
      var todoList = this;
      //lista de tareas
      todoList.todos = [
        {text:'aprender mas sobre AngularJS', done:false},
        {text:'construir una aplicación AngularJS', done:false},
        {text:'exponer en el webinar', done:false},
        {text:'realizar ejemplo de angular js', done:false}];
        
   //para agregar tareas
      todoList.addTodo = function() {
        todoList.todos.push({text:todoList.todoText, done:false});
        todoList.todoText = '';
      };
  // tareas restantes
      todoList.remaining = function() {
        var count = 0;
        angular.forEach(todoList.todos, function(todo) {
          count += todo.done ? 0 : 1;
        });
        return count;
      };
      //funcion para archivar las tareas
      todoList.archive = function() {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) todoList.todos.push(todo);
        });
      };
    });





