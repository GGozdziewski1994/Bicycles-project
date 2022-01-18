import classes from './Rating.module.css';

const ratingsColor = (ratings, user) => {
    const userRating = ratings?.filter(r => r?.user === user);
    const rating = userRating[0]?.rating;
    if(rating === undefined) return `${classes.all}`
    if(rating === 1)  return `${classes.one}`
    if(rating === 2) return `${classes.two}`
    if(rating === 3) return `${classes.three}`
    if(rating === 4) return `${classes.four}`
    if(rating === 5) return `${classes.five}`
    else return `${classes.all}`
};

export default ratingsColor;