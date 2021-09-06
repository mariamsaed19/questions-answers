import React, { useState } from "react";
import Card from './questions/Card'
import { Pagination } from '@material-ui/lab';
import './Pagination-component-styling.css'
function Paginationcomponent(props){
    const maxPages = Math.ceil(props.questions.length/6)
    const [page, setPage] = useState(1);
    const [quesVal,setQues] = useState('')
    const handleChange =  (evt,val) =>{
      setPage(val) ;
    }

    const showOverlay =()=>{
        document.getElementsByClassName('overlay')[0].style.display="block";
    }
    const addHandler = ()=>{
        if(quesVal.trim().length === 0){
            alert("You haven't entered anything !")
            return
        }
        const newItem = {
        id: Math.random() , question : quesVal , comment :[], likes:0 , dislikes : 0}
        cancelHandler();
        props.add(newItem);
    }

    const quesHandler = (evt)=>{
        setQues(evt.target.value)
    }
    const cancelHandler = () =>{
        document.getElementsByClassName('overlay')[0].style.display="none";
        setQues('');
    }
    return(
        <div>
            <div className="overlay"> 
                <div className="overlay-container">
                <h3> Add your question </h3>
                <textarea  className="question-input" value= {quesVal} rows="10" cols="30" onChange={quesHandler}></textarea>
                <button  className="addq" onClick={addHandler}>Add Question</button>
                <button  className="cancel" onClick={cancelHandler}> cancel</button>
                </div>
            </div>
        <img src ="Q.png" alt="Q and A"  className="q-a"/>
        <button className="add-ques" onClick={showOverlay}> Add question </button>
        <div className="ques-holder">
            {props.questions.length !==0?
            props.questions.slice((page-1)*6 , page * 6).map(question =>{
                return <Card key = {question.id} delete = {props.delete} view= {props.view} content ={question}/>
            }) :
            <h1> No questions yet </h1>
            }
        </div>
        <div className="pages">
        <Pagination 
                    
                    count={maxPages}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    
                    color="primary"
        />
        </div>
        </div>
    )
 
}
export default Paginationcomponent;