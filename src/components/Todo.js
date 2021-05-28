import React, {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';



const Todo = ({todos,completeTodo,removeTodo}) => {

    return todos.map( (todo,index)=>(
        <div className = {todo.isComplete? 'todo-row Complete' : 'todo-row'} 
        key={index}>
        
        <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine onClick={()=>removeTodo(todo.id)} className='delete-icons'/>
        </div>
    
        </div>
    ))
}
 
export default Todo;