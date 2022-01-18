const updateItem = updateBikes => {
    return {
        ...updateBikes,
    id: null,
    isAddComment: false,
    isComment: false,
    };
};

export default updateItem;