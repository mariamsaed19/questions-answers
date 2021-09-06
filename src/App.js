import React, { useState } from 'react';
import {AppBar,Toolbar} from '@material-ui/core';
import Paginationcomponent from './components/Pagination-component';
import Answer from './components/answers/Answer'
let questionsStart=[
  {id:'1', question : "t1" , comment :['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11'], likes:500 , dislikes : 25},
  {id:'2', question : "t2" , comment :['c1','c2','c3'], likes:50 , dislikes : 2},
  {id:'3', question : "t3" , comment :['c1','c2','c3'], likes:50 , dislikes : 250},
  {id:'4', question : "t4" , comment :['c1','c2','c3'], likes:150 , dislikes : 25},
  {id:'5', question : "t5" , comment :['c1','c2','c3'], likes:50 , dislikes : 2},
  {id:'6', question : "t6" , comment :['c1','c2','c3'], likes:50 , dislikes : 250},
  {id:'7', question : "t7" , comment :['c1','c2','c3'], likes:50 , dislikes : 2},
  {id:'8', question : "t8" , comment :['c1','c2','c3'], likes:50 , dislikes : 250},
  {id:'9', question : "t9" , comment :['c1','c2','c3'], likes:50 , dislikes : 2},
  {id:'10', question : "t10" , comment :['c1','c2','c3'], likes:50 , dislikes : 250},
  {id:'11', question : "t11" , comment :['c1','c2','c3'], likes:50 , dislikes : 2},
  {id:'12', question : "t12" , comment :['c1','c2','c3'], likes:50 , dislikes : 250},
  {id:'13', question : "t1" , comment :['c1','c2','c3'], likes:500 , dislikes : 25},
  {id:'14', question : "t2" , comment :['c1','c2','c3'], likes:50 , dislikes : 2},
  {id:'15', question : "t3" , comment :['c1','c2','c3'], likes:50 , dislikes : 250},
  {id:'16', question : "t4" , comment :['c1','c2','c3'], likes:150 , dislikes : 25},
  {id:'17', question : "t5" , comment :['c1','c2','c3'], likes:50 , dislikes : 2}
];

 function App() {
  const [questions,setQuestions] = useState(questionsStart);
  const [viewMode,setView] = useState(true)
  const[content , setContent] =useState({
    id:'', question : "" , comment :[], likes:0 , dislikes : 0}
  )
  const  deleteHandler= (item)=>{
       setQuestions((prev)=>{
          prev= prev.filter ( elm =>{
            return item.id !== elm.id;
          })
            return prev
        })
        setView(true)
  }
  const viewHandler = item=>{
      setContent(item)
      setView(false)
  }

const addHandler = item=>{
    setQuestions(prev =>{
      prev= [item , ...prev]
      return prev;
    })
    setView(true)
}

const updateHandler = item =>{
    setQuestions(prev => {
      prev = prev.map(elm =>{
        return elm.id === item.id ? item : elm
      })
      return prev
    })
    setContent(item)
    setView(false)
}
const homeHandler = ()=>{
  setView(true)
}
  return (
    <div>
        <AppBar position="static">
        <Toolbar variant="dense" className="navBar">
          <h3 onClick={homeHandler}>
            Home
          </h3>
        </Toolbar>
      </AppBar>

      {viewMode? <Paginationcomponent delete = {deleteHandler} view={viewHandler}  add= {addHandler} questions ={questions}/> 
      :
       <Answer item = {content} delete={deleteHandler} update={updateHandler} />
       
       
       }

    </div>
  );
}

export default App;
