import AddCommentStyle from '../UI/AddComment';
import ButtonComment from "../UI/ButtonComment";
import { useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import { ADD_COMMENT } from '../../constants/reducerBikesItemConstants';

const AddComment = props => {
  const commentInputRef = useRef('');
  const authContextCurrentUser = useContext(AuthContext).currentUser;

  const submitCommentHandler = event => {
    event.preventDefault();

    props.onDispatchBikes({
        type: ADD_COMMENT, 
        id: event.target.id, 
        value: commentInputRef.current.value, 
        user: authContextCurrentUser,
        addComment: props.onRequestItem,
    });
  };

    return(
        <AddCommentStyle>
            <h3 className='title'>Add Comment</h3>
            <form className='comment' onSubmit={submitCommentHandler} id={props.id}>
                <textarea rows='5' placeholder='Comment bike.' ref={commentInputRef} />
                <div className='comment__button'>
                    <ButtonComment id={props.id} onClick={props.hideAddComment} type='click'>Cancel</ButtonComment>
                    <ButtonComment type='submit'>Add</ButtonComment>
                </div>
            </form>
        </AddCommentStyle>
    );
}

export default AddComment;