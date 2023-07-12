import React from 'react';
import TodoItem from './TodoItem';
function TodoList(props) {
  return (
    <div className='container left'>
        <h1>Todo List Items</h1>
        {props.todos.length===0?"No Todo to display":
        props.todos.map((e)=>{
          return  <TodoItem todo={e} key={e.sno} onDelete={props.onDelete}/>
        })
      }
    </div>
  );
}

export default TodoList;

