import Comm from '../UI/Comm'
import ButtonComment from "../UI/ButtonComment";
import { useRef, useContext } from 'react';
import AuthContext from "../../context/auth-context";

const Comments = props => {
  const { comments, onDispatchBikes } = props;
  const commentInputRef = useRef('');
  const currUserContext = useContext(AuthContext).currentUser;
  const isAdminContext = useContext(AuthContext).isAdmin;

  const isEditHandler = event => {
    onDispatchBikes({type: 'IS_EDIT', id: event.target.id, idComment: event.target.attributes.data.value});
  };

  const removeComment = event => {
    const id = event.target.id;
    const attributesData = event.target.attributes.data.value;
    
    props.onRemove(id, attributesData);
  }

  const submitEditComment = event => {
    event.preventDefault();
    const id = event.target.id;
    const attributesData = event.target.attributes.data.value;
    const editCommentValue = commentInputRef.current.value;
    
    props.onEdit(id, attributesData, editCommentValue);
  }

  return(
    <Comm>
      <h2 className='tittle'>Comments</h2>
      {comments.length > 0 ? comments.map(item => {
        const currUser = currUserContext === item.user;
        return(
          <div className='comment' key={item.id}>
            <h4>User name: {item.user}</h4>
            {!item.isEdit && <div>
              <p>Comment: {item.comment}</p>
              <div className='comment__buttons'>
                {currUser && <ButtonComment 
                  id={props.id} 
                  data={item.id} 
                  onClick={isEditHandler}>Edit</ButtonComment>}
                {isAdminContext && <ButtonComment 
                  id={props.id} 
                  data={item.id} 
                  className='comment__buttons-remove' 
                  onClick={removeComment}>Remove</ButtonComment>}
              </div>
            </div>}
            
            {item.isEdit && <form 
                className='comment__form' 
                onSubmit={submitEditComment}
                id={props.id}
                data={item.id}>
              <p>Comment: </p>
              <textarea rows="3" defaultValue={item.comment} ref={commentInputRef}></textarea>
              <div className='comment__form-button'>
                <ButtonComment>Confirm</ButtonComment>
                <ButtonComment 
                  id={props.id} 
                  data={item.id} 
                  onClick={isEditHandler}>Cancel</ButtonComment>
              </div>
            </form>}
          </div>
          );
        }) : <p>No Comments</p> 
      }
    </Comm>
  )
};

export default Comments;