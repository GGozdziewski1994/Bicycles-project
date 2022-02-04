import { Fragment, useContext, useRef, useState, useCallback } from "react";
import ErrorModal from "../UI/ErrorModal";
import { useNavigate } from 'react-router-dom';
import SectionAuth from "../UI/SectionAuth";
import AuthContext from "../../context/auth-context";
import useForm from '../../hooks/use-form';
import sendRequestLoginDetails from './sendRequestLoginDetails';
import environment from "../../environments/environment";
const API_KEY = process.env.REACT_APP_API_KEY;

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useForm(value => value.includes('@'));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        valueBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = useForm(value => value.trim().length >= 6);

    const cleanError = useCallback(() => {
        setError(null);
        setIsLoading(false);
    }, []);

    const switchAuthModelHandler = () => {
        setIsLogin(prevState => !prevState);
        resetPasswordInput();
        resetEmailInput();
    };

    let fromIsValid = false;
    if(enteredEmailIsValid && enteredPasswordIsValid) fromIsValid = true;

    const submitHandler = async event => {
        event.preventDefault();

        let url;
        if(isLogin) url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
        else url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

        setError(null);
        setIsLoading(true);

        try {
            const response = await sendRequestLoginDetails(url, enteredEmail, enteredPassword, true, null);
            if (!response.ok) throw new Error('Wrong login or password');
            const data = await response.json();
            
            const responseFindAdmin = await fetch(environment.getAdmin);
            if(!responseFindAdmin) throw new Error('Something went wrong');

            const dataFindAdmin = await responseFindAdmin.json();
            const isAdmin = Object.values(dataFindAdmin).some(user => user.email === enteredEmail);
        
            authContext.login(data.idToken, enteredEmail, isAdmin);

            setIsLoading(false);
            resetEmailInput();
            resetPasswordInput();
            navigate('/bikes');
        } catch(error) {
            setError(error.message);
            resetPasswordInput();
        }
    }

    const classNameEmail = emailInputHasError ? 'control invalid' : 'control';
    const classNamePassword = passwordInputHasError ? 'control invalid' : 'control';

    return(
        <Fragment>
            {error && <ErrorModal onClean={cleanError}>{error}</ErrorModal>}
            <SectionAuth>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classNameEmail}>
                        <label htmlFor='email'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            required
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                        />
                        {emailInputHasError && <p className="control-error">Email can not be empty</p>}
                    </div>
                    <div className={classNamePassword}>
                        <label htmlFor='password'>Your Password</label>
                        <input
                            type='password'
                            id='password'
                            required
                            value={enteredPassword}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                        />
                        {passwordInputHasError && <p className="control-error">Password must be min 6 signs</p>}
                    </div>
                    <div className='actions'>
                        {!isLoading && <button disabled={!fromIsValid}>{isLogin ? 'Login' : 'Create Account'}</button>}
                        {isLoading && <p>{isLogin ? '...Requesting login' : '...Requesting new account'}</p>}
                        <button
                            type="button"
                            className='toggle'
                            onClick={switchAuthModelHandler}>
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                    </div>
                </form>
            </SectionAuth>
        </Fragment>
    );
};

export default AuthForm;