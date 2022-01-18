import updateItem from './updateItem';
import getIdComment from "./getIdComment";
import createIdComment from "./createIdComment";
import { FILTER, IS_COMMENT, COMMENT, ADD_COMMENT, HIDE_COMMENT, SEND_RATING, EDIT, IS_EDIT, REMOVE } from '../../constants/reducerBikesItemConstants';

const reducerBikesItem = (state, action) => {
    const index = state.bikes.findIndex(p => p.id === action.id);
    const updateBikes = [...state.bikes];
    if(action.type === COMMENT) {
        const comment = state.bikes[index].isComment;
        updateBikes[index].isComment = !comment;
        return {...state, bikes: updateBikes}
    }
    if(action.type === IS_COMMENT) {
        updateBikes[index].isAddComment = true;
        return {...state, bikes: updateBikes}
    }
    if(action.type === HIDE_COMMENT) {
        updateBikes[index].isAddComment = false;
        return {...state, bikes: updateBikes}
    }
    if(action.type === SEND_RATING) {
        if(state.bikes[index].ratings.length > 0) {
            const user = state.bikes[index].ratings.some(r => r.user === action.user);
            if(user) return {...state};
        }
        updateBikes[index].ratings.push({user: action.user, rating: +action.value});
        const updateRating = updateItem(updateBikes[index]);
        action.addRating(action.id, updateRating);
        return {...state, bikes: updateBikes}
    }
    if(action.type === FILTER) {
        return {...state, bikes: action.filterBikes}
    }
    if(action.type === ADD_COMMENT) {
        updateBikes[index].comments.push({ user: action.user, comment: action.value, isEdit: false, id: createIdComment(action.value) });
        const updateComm = updateItem(updateBikes[index]);
        action.addComment(action.id, updateComm);
        updateBikes[index].isAddComment = false;
        return {...state, bikes: updateBikes}
    }
    if(action.type === REMOVE) {
        const removeComment = updateBikes[index].comments.filter(item => item.id !== action.idComment);
        updateBikes[index].comments = removeComment;
        const updateComm = updateItem(updateBikes[index]);
        action.removeComment(action.id, updateComm);
        return{...state, bikes: updateBikes}
    }
    if(action.type === EDIT) {
        const editCommentIndex = getIdComment(updateBikes[index], action.idComment);
        const stateUser = state.bikes[index].comments[editCommentIndex].user;
        updateBikes[index].comments[editCommentIndex] = { user: stateUser, comment: action.value, isEdit: false, id: createIdComment(action.value) };
        const updateComm = updateItem(updateBikes[index]);
        action.editComment(action.id, updateComm);
        return{...state, bikes: updateBikes}
    }
    if(action.type === IS_EDIT) {
        const editCommentIndex = getIdComment(updateBikes[index], action.idComment);
        const isEdit = state.bikes[index].comments[editCommentIndex].isEdit
        updateBikes[index].comments[editCommentIndex].isEdit = !isEdit;
        return {...state, bikes: updateBikes}
    }
};

export default reducerBikesItem;