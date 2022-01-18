import NewBike from "../UI/NewBike";
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";
import { ButtonComment as ButtonBike } from "../UI/ButtonComment";
import { useRef } from "react";
import useForm from '../../hooks/use-form';

const AddBike = props => {
    const typeInputRef = useRef('');
    const {
        value: enteredModel,
        isValid: enteredModelIsValid,
        hasError: modelInputHasError,
        valueChangeHandler: modelChangeHandler,
        valueBlurHandler: modelBlurHandler,
        reset: resetModelInput
    } = useForm(value => value.trim() !== '');

    const {
        value: enteredPrice,
        isValid: enteredPriceIsValid,
        hasError: priceInputHasError,
        valueChangeHandler: priceChangeHandler,
        valueBlurHandler: priceBlurHandler,
        reset: resetPriceInput
    } = useForm(value => value.trim() !== '');

    const {
        value: enteredImg,
        isValid: enteredImgIsValid,
        hasError: imgInputHasError,
        valueChangeHandler: imgChangeHandler,
        valueBlurHandler: imgBlurHandler,
        reset: resetImgInput
    } = useForm(value => value.trim() !== '');

    let formIsValid = false;
    if(enteredModelIsValid && enteredPriceIsValid && enteredImgIsValid) formIsValid = true;

    const submitInputHandler = event => {
        event.preventDefault();

        const enteredType = typeInputRef.current.value;

        if(!formIsValid) return;
        
        const enteredBike = {
            isComment: false,
            isAddComment: false,
            model: enteredModel,
            price: enteredPrice,
            img: enteredImg,
            type: enteredType,
            comments: [],
            ratings: [],
        }
    
        props.onAdded(enteredBike);
        props.onCancel();

        resetModelInput();
        resetPriceInput();
        resetImgInput();
    };

    const classNameModel = modelInputHasError ? 'control invalid' : 'control';
    const classNamePrice = priceInputHasError ? 'control invalid' : 'control';
    const classNameImg = imgInputHasError ? 'control invalid' : 'control';

    return(
        <NewBike>
            <Backdrop onClick={props.onCancel} />
            <Modal className='model'>
                <h2 className='title'>Add New Bike</h2>
                <form onSubmit={submitInputHandler}>
                    <div className={classNameModel}>
                        <label>Model</label>
                        <input 
                            type='text' 
                            id='model'
                            value={enteredModel} 
                            onChange={modelChangeHandler}
                            onBlur={modelBlurHandler}
                        />
                        {modelInputHasError && <p className='control-error'>Model can not be empty</p>}
                    </div>
                    <div className={classNamePrice}>
                        <label>Price</label>
                        <input 
                            type='text' 
                            id='price' 
                            value={enteredPrice} 
                            onChange={priceChangeHandler}
                            onBlur={priceBlurHandler}
                        />
                        {priceInputHasError && <p className='control-error'>Price can not be empty</p>}
                    </div>
                    <div className={classNameImg}>
                        <label>Img URL</label>
                        <input 
                            type='text' 
                            id='img' 
                            value={enteredImg} 
                            onChange={imgChangeHandler}
                            onBlur={imgBlurHandler}
                        />
                        {imgInputHasError && <p className='control-error'>Img can not be empty</p>}
                    </div>
                    <div className='control'>
                        <label>Type</label>
                        <select ref={typeInputRef}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className='actions'>
                        <ButtonBike className='actions__button' onClick={props.onCancel}>Cancel</ButtonBike>
                        <ButtonBike disabled={!formIsValid}>Add</ButtonBike>
                    </div>
                </form>
            </Modal>
        </NewBike>
    );
}

export default AddBike;