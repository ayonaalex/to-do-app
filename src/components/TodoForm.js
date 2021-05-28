import React, {useState} from 'react'


const TodoForm = (props) => {
    const [input, setInput] = useState('');
    
    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()* 1000),
            text : input,
        });
        setInput('');
    };
     

    return (
        <form className="todo-form" onSubmit={handleSubmit} >
            <input type="text" 
            onChange = {handleChange} //form event whenever thers a change we are going to do something
            className="todo-input" 
            placeholder="whats needs to be done next?" 
            value = {input}/>            
            <button  className="todo-button"> Add todo</button>
        </form>
    );
}
 
export default TodoForm;