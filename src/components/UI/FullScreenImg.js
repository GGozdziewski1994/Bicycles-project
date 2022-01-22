import styled from "styled-components";
import Backdrop from './Backdrop';
import Modal from './Modal';

const FullScreen = styled.div`
    & .modal {
        width: 800px;
        height: 600px;
        &__btn {
            position: absolute;
            right: 0.75rem;
            top: 0.25rem;
            border: none;
            background: transparent;
            font-size: 1.25rem;
            cursor: pointer;
            color: rgba(0, 0, 0, 0.7);
            &:hover {
                color: black;
                font-weight: bold;
            }
        }
    }
    & img {
        padding: 2rem;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 768px) {
        & .modal {
            width: 400px;
            height: 300px;
            &__btn {
                top: 0;
                right: 0.25rem;
            }
        }

        & img {
            padding: 1rem;
        }
    }    
`;

const FullScreenImg = props => {
    return(
        <FullScreen>
            <Backdrop onClick={props.onHideImg}></Backdrop>
            <Modal className="modal">
                <button onClick={props.onHideImg} className="modal__btn">x</button>
                <img src={props.img} />
            </Modal>
        </FullScreen>
    );
}

export default FullScreenImg;