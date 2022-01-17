import Modal from "./Modal";
import Error from "./Error";
import Backdrop from "./Backdrop";

const ErrorModal = props => {
    return(
        <Error>
            <Backdrop onClick={props.onClean} />
            <Modal>
                <h2 className='title'>Error</h2>
                <p className='children'>{props.children}</p>
                <div className='actions'>
                    <button onClick={props.onClean}>OK</button>
                </div>
            </Modal>
        </Error>
    );
};

export default ErrorModal;