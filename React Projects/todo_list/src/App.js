import './App.css';
import Additemtodo from './Components/Additemtodo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import React, {useState} from 'react';

function App() {
 
  const onDelete=(todo)=>{
    console.log("i am deleteing");
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  };
  const addTodo=(title,desc)=>{
    console.log("tofdo added",title,desc)
    let sno=todos[todos.length-1].sno+1;
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };
const [todos,setTodos]=useState( [
  {
    sno:1,
    title:"Go to market",
    desc:"Get the job 1 done"
  },
  { sno:2,
    title:"Go to mall",
    desc:"Get the job 2 done"},
  { sno:3,
    title:"Go to shop",
    desc:"Get the job 3 done"}
]);
 

  return ( 
    <div className="">
      <Header title="Todo-List" searchBar={false}/>
      <Additemtodo addTodo={addTodo}/>
      <TodoList todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
