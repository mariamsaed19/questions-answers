import './Answer-styling.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useState } from 'react';
function Answer(props){
const [commentVal, setCommentVal]=useState('')
const deleteQuestion = ()=>{
    props.delete(props.item);
}

const updateLikes = ()=>{
    props.item.likes ++;
    props.update(props.item)
}
const updateDislikes = ()=>{
    props.item.dislikes ++;
    props.update(props.item)
}

const deleteComment = elm =>{
    props.item.comment = props.item.comment.filter( el =>{
        return el !==elm 
    })
    props.update(props.item)
}
const commentHandler = (evt)=>{
    setCommentVal(evt.target.value);
}
const addComment = () =>{
    if(commentVal.trim().length === 0){
        alert("You haven't entered anything !")
        return
    }
    props.item.comment.push(commentVal)
    setCommentVal('')
    props.update(props.item)
}
return(

<div className="container">
    <div className="q-holder"> 
    <h2>{props.item.question} </h2>
    <div className= "likes-holder" onClick={updateLikes}> <ThumbUpIcon/> {props.item.likes} </div>
    <div className= "dislikes-holder" onClick={updateDislikes}> <ThumbDownIcon/> {props.item.dislikes} </div>
    <div className ="delete-holder" onClick={deleteQuestion}> <DeleteForeverIcon/> Delete </div>
    </div>

    <div className="comment-container"> 
       <div className="display-comment">
            {  props.item.comment.length > 0 ?
            
            props.item.comment.map(comment =>{
                return <div key ={comment} className="comment"> 
                    <div className="remove-holder"  onClick={()=> deleteComment(comment)}> <HighlightOffIcon/> </div>
                    <div>{comment} </div>
               
                </div>
            })
            :
            <h3> No comments yet ! </h3>
        
        }   
           
        </div>
       <div className="add-comment">
           <textarea className="comment-area" value= {commentVal} rows="10" cols="30" onChange={commentHandler}></textarea>
           <button className="post-comment" onClick={addComment}>post comment</button>
        </div>

    </div>

</div>


)

}

export default Answer;