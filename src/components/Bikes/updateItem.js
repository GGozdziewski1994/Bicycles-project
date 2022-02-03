const updateItem = updateBikes => {
    return {
        ...updateBikes,
    isAddComment: false,
    isComment: false,
    };
};

export default updateItem;