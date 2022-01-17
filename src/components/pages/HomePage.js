import Animation from "./../UI/Animation";
import background from './../../images/astronomy.jpg';
import earth from './../../images/earth.png';
import bike from './../../images/bike-background.gif';

const HomePage = () => {
    return(
        <Animation>
            <div className="background">
                <img src={background} alt="astronomy"/>
            </div>
            <div className='bicycle'>
                <img src={bike} alt="bike"/>
            </div>
            <div className="earth">
                <img src={earth} alt="earth"/>
            </div>
        </Animation> 
    );
}

export default HomePage;