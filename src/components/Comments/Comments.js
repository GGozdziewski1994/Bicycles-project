import CommentStyle from '../UI/Comment'
import ButtonComment from "../UI/ButtonComment";
import { useRef, useCallback, useContext } from 'react';
import AuthContext from "../../context/auth-context";
import useHttp from '../../hooks/use-http';
import { EDIT, IS_EDIT, REMOVE } from '../../constants/reducerBikesItemConstants';

const Comments = props => {
  const { comments, onDispatchBikes } = props;
  const commentInputRef = useRef('');
  const currUserContext = useContext(AuthContext).currentUser;
  const isAdminContext = useContext(AuthContext).isAdmin;
  const { sendRequest } = useHttp();

  const requestComment = useCallback(async (id, updateComment) => {
    await sendRequest(`https://bikesapp-gg-default-rtdb.europe-west1.firebasedatabase.app/bikes/${id}.json`,
        'PUT',
        JSON.stringify(updateComment),
    );
  }, [sendRequest]);

  const isEditHandler = event => {
    onDispatchBikes({type: IS_EDIT, id: event.target.id, idComment: event.target.attributes.data.value});
  };

  const removeCommentHandler = event => {
    onDispatchBikes({
      type: REMOVE, 
      id: event.target.id, 
      idComment: event.target.attributes.data.value,
      removeComment: requestComment,
    });
  };

  const submitEditCommentHandler = event => {
    event.preventDefault();

    onDispatchBikes({
      type: EDIT,
      id: event.target.id,
      idComment: event.target.attributes.data.value,
      value: commentInputRef.current.value,
      editComment: requestComment, 
    });
  };

  return(
    <CommentStyle>
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
                  onClick={removeCommentHandler}>Remove</ButtonComment>}
              </div>
            </div>}
            
            {item.isEdit && <form 
                className='comment__form' 
                onSubmit={submitEditCommentHandler}
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
    </CommentStyle>
  )
};

export default Comments;