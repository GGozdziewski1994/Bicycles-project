import AddComm from '../UI/AddComm';
import ButtonComment from "../UI/ButtonComment";
import { useRef } from "react";

const AddComment = props => {
  const commentInputRef = useRef('');

  const submitComment = event => {
    event.preventDefault();

    const id = event.target.id
    const comment = commentInputRef.current.value;
    
    props.addComment(id, comment);
  };

    return(
        <AddComm>
            <h3 className='title'>Add Comment</h3>
            <form className='comment' onSubmit={submitComment} id={props.id}>
                <textarea rows='5' placeholder='Comment bike.' ref={commentInputRef} />
                <div className='comment__button'>
                    <ButtonComment id={props.id} onClick={props.hideAddComment} type='click'>Cancel</ButtonComment>
                    <ButtonComment type='submit'>Add</ButtonComment>
                </div>
            </form>
        </AddComm>
    );
}

export default AddComment;