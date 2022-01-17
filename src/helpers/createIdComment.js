const createIdComment = value => {
    return `${value.replaceAll(' ', '')}${Math.random()}`
};

export default createIdComment;