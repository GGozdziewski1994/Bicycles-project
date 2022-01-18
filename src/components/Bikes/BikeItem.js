import React from "react";
import Comments from "../Comments/Comments";
import Bike from "../UI/Bike";
import AddComment from "../Comments/AddComment";
import { useState, useContext, useEffect, useReducer, useCallback, Fragment } from "react";
import AuthContext from "../../context/auth-context";
import calcAverRating from "../../helpers/calcAverRating";
import useHttp from '../../hooks/use-http';
import ErrorModal from "../UI/ErrorModal";
import ratingsColor from '../../helpers/ratingColor';
import FullScreenImg from "../UI/FullScreenImg";
import reducerBikesItem from './reducerBikesItem';

const BikeItem = props => {
    const { bikes: propsBikes } = props;
    const [bikesState, dispatchBikes] = useReducer(reducerBikesItem, propsBikes);
    const authContext = useContext(AuthContext);
    const { sendRequest, cleanError, error } = useHttp();
    const [showImg, setShowImg] = useState(null);

    const requestItem = useCallback(async (id, item) => {
        await sendRequest(`https://bikesapp-gg-default-rtdb.europe-west1.firebasedatabase.app/bikes/${id}.json`,
            'PUT',
            JSON.stringify(item),
        );
    }, [sendRequest]);

    useEffect(() => {
        dispatchBikes({type: 'FILTER', filterBikes: propsBikes.bikes});
    }, [propsBikes])

    const isCommentHandler = event => {
        dispatchBikes({type: 'IS_COMMENT', id: event.target.id});
    };

    const showCommentsHandler = event => {
        dispatchBikes({type: 'COMMENT', id: event.target.id});
    };

    const hideAddCommentHandler = event => {
        event.preventDefault();
        dispatchBikes({type: 'HIDE_COMMENT', id: event.target.id});
    };

    const addCommentHandler = (idBike, comment) => {
        dispatchBikes({
            type: 'ADD_COMMENT', 
            id: idBike, 
            value: comment, 
            user: authContext.currentUser,
            addComment: requestItem,
        });
    };

    const removeCommentHandler = (id, attributesData) => {
        dispatchBikes({
            type: 'REMOVE', 
            id: id, 
            idComment: attributesData,
            removeComment: requestItem,
        });
    };

    const editCommentHandler = (id, attributesData, editCommentValue) => {
        dispatchBikes({
            type: 'EDIT',
            id: id,
            idComment: attributesData,
            value: editCommentValue,
            editComment: requestItem, 
        });
    };

    const submitRatingHandler = event => {
        event.preventDefault();
        dispatchBikes({
            type: 'SEND_RATING',
            id: event.target.id,
            value: event.nativeEvent.submitter.value,
            user: authContext.currentUser,
            addRating: requestItem,
        });
    };

    const shwoImgHandler = event => {
        setShowImg(event.target.src);
    };

    const hideImgHandler = () => {
        setShowImg(null);
    };
        
    return(
        <Fragment>
            {error && <ErrorModal onClean={cleanError}>{error}</ErrorModal>}
            {showImg !== null && <FullScreenImg onHideImg={hideImgHandler} img={showImg} />}
            {bikesState.bikes.map(bike => {
                return (
                    <Bike key={bike.id}>
                    <div className='bike'>
                        <div onClick={shwoImgHandler} className='bike__img'>
                            <img src={bike.img}/>
                        </div>
                        <div className='bike__info'>
                            <p>{bike.model}</p>
                            <p>{bike.price}$</p>
                            <div className='bike__info--rating'>
                                <form className={ratingsColor(bike.ratings, authContext.currentUser)} id={bike.id} onSubmit={submitRatingHandler}>
                                    <button type='submit' name="rating" value="5">&#9733;</button>
                                    <button type='submit' name="rating" value="4">&#9733;</button>
                                    <button type='submit' name="rating" value="3">&#9733;</button>
                                    <button type='submit' name="rating" value="2">&#9733;</button>
                                    <button type='submit' name="rating" value="1">&#9733;</button>
                                </form>
                                <p>Rating: {calcAverRating(bike.ratings)}
                                </p>
                            </div>
                        </div>
                        <div className='bike__add-comment'>
                            <button id={bike.id} onClick={isCommentHandler}>Add Comment</button>
                        </div>
                    </div>
                    {bike.isAddComment && <AddComment 
                        id={bike.id} 
                        hideAddComment={hideAddCommentHandler} 
                        addComment={addCommentHandler}
                        />
                    }
                    {bike.isComment && <Comments 
                        id={bike.id} 
                        comments={bike.comments} 
                        onRemove={removeCommentHandler} 
                        onEdit={editCommentHandler}
                        onDispatchBikes={dispatchBikes}
                        />
                    }
                    <div className='show-comments'>
                        <button 
                            id={bike.id} 
                            onClick={showCommentsHandler}
                            >{bike.isComment ? `Hide Comments ⇑` : `Show Comments ⇓ (${bike.comments.length})`}
                        </button>
                    </div>
                </Bike>   
                );
            })}
        </Fragment>
    );
};

export default BikeItem;