import './Card-style.css'
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
function Card(props){
let total = props.content.likes +props.content.dislikes
let percent = Math.ceil((props.content.likes / total)*100) +'%'
const deleteItem = ()=>{
    props.delete(props.content)
}
const viewItem =()=>{
    props.view(props.content)
}
return(
    <div className="question-holder">
        <button id="delete" onClick={deleteItem}> Delete</button>
        <button id="view" onClick={viewItem}> View</button>
        <h4 className="question"> {props.content.question} </h4>

        <div >
            <div className="likes"> 
                <div className="likes inner" style={{width: percent }}>  
              </div>
            </div>
            <ThumbsUpDownIcon className="thumbs"/>
            <div className="answers-numbers"> {props.content.comment.length} </div>
            <QuestionAnswerIcon className="thumbs ques"/>
        </div>
    </div>
);

}

export default Card;