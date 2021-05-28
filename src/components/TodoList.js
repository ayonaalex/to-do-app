import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        const newTodos = [todo, ...todos]

        setTodos(newTodos);

        console.log(newTodos);
    };

    const completeTodo = id =>{
        let updatedTodos = todos.map( todo =>{
            if (todo.id ===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };


    const removeTodo = (id)=>{
        const deleteTodo = [...todos].filter(todo=> todo.id !==id)     
        setTodos(deleteTodo);
    };

    return ( 
        <div>
            <h1 className="todo-title"> To Do List </h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        </div>
     );
}
 
export default TodoList;