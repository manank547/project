import './App.css';
import About from './Components/About';
import Additemtodo from './Components/Additemtodo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if( localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
  sno=todos[todos.length-1].sno+1;}
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
    const [todos,setTodos]=useState(initTodo);
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]);

  return ( 
    
    <div className="">
      <BrowserRouter>
      <Header title="Todo-List" searchBar={false}/>
      <Routes>
      <Route path="/" element={ <> <Additemtodo addTodo={addTodo}/>
      <TodoList todos={todos} onDelete={onDelete}/>
       </>}/>
       <Route path="/home" element={ <> <Additemtodo addTodo={addTodo}/>
      <TodoList todos={todos} onDelete={onDelete}/>
       </>}/>
   <Route path="/about" element={ <About/>}/>
         </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;