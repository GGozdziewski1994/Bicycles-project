const calcAverRating = (ratings) => {
    if(ratings.length === 0) return 0;

    const averRating = ratings.map(item => item.rating).reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    return (averRating / ratings.length).toFixed(2);
}

export default calcAverRating;