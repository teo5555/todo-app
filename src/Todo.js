import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';


function Todo({ yapilacak, butunListe1, removeTodo, update}) {

    const [edit, setEdit] = useState({
        id: null,
        text: ""
    });

    const submitUpdate = value => {
        update(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })

    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    };


    return yapilacak.map((todo, index) => (
        <div className={todo.bitik ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => butunListe1(todo.id)}>
                {todo.text}
            </div>

            <div className="icons">
                <RiCloseCircleLine
                    className="delete-icon"
                    onClick={() => removeTodo(todo.id)} />
                <TiEdit
                    className="edit-icon"
                    onClick={() => setEdit({ id: todo.id, value: todo.text })} />
            </div>

        </div>
    ))
}

export default Todo
