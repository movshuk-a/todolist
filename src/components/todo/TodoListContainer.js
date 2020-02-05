import React from 'react';
import back from '../../assets/back.jpg';
import TodoComponent from "./TodoComponent";

function TodoListContainer(props) {
    const {todoList, updateTodo, deleteTodoById} = props;   //array of todo's
    return (
        <div
            style={{
            padding: '20px 0 0',
            position: 'relative',
            background: `url(${back})`,
            height: '60vh'
        }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <TodoComponent 
                        
                                        key={todo.id}
                                        todo={todo}
                                        updateTodo={updateTodo}
                                        deleteTodoById={deleteTodoById}
                        />
                    ))
                )
            }

            
        </div>

    );
}

export default TodoListContainer;