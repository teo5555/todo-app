import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
function TodoList() {

    const[todos,setTodos]  = useState([]);


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...todos];

        setTodos(newTodos);

        console.log(todo,...todos);

    }

    const removeTodo = id =>{
        const removeArr =[...todos].filter(todo =>todo.id !== id);
        
        setTodos(removeArr);
    };

    const updateTodo = (todoId,newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const butunListe = id =>{
        let updateTodos = todos.map(todo =>{
            if(todo.id ===id){
                todo.bitik = !todo.bitik;

            }
            return todo;
        });
        setTodos(updateTodos);
    }


    return (

        <div>
            <h1>What's the plan for today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo yapilacak={todos} butunListe1={butunListe} removeTodo={removeTodo} update={updateTodo}/>
        </div>

    )
}

export default TodoList
