const getIdComment = (updateBikes, idComment) => {
    return updateBikes.comments.findIndex(item => item.id === idComment);
};

export default getIdComment;