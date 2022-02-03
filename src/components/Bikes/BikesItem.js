import { Bikes, ButtonAddNew, ButtonFilter } from "../UI/Bikes";
import BikeItem from "./BikeItem";
import AddBike from "./AddBike";
import { useCallback, useEffect, useReducer, useState, useContext } from "react";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../context/auth-context";
import ErrorModal from "../UI/ErrorModal";
import { ALL, MALE, FEMALE } from '../../constants/reducerFilterConstants';
import environment from "../../environments/environment";

const reducerFilter = (state, action) => {
    if(action.type === ALL) {
        return {...action.bikes}
    }

    if(action.type === MALE) {
        const filter = action.bikes.bikes.filter(bike => bike.type === 'male');
        return {bikes: [...filter]};
    }

    if(action.type === FEMALE) {
        const filter = action.bikes.bikes.filter(bike => bike.type === 'female');
        return {bikes: [...filter]};
    }

    return{...state}
};

const BikesItem = () => {
    const [isAddNew, setIsAddNew] = useState(false);
    const { isLoading, error, data, sendRequest, cleanError } = useHttp();
    const [filterState, dispatchFilter] = useReducer(reducerFilter, {});
    const [dataBikes, setDataBikes] = useState({});
    const isAdminContext = useContext(AuthContext).isAdmin;

    const fetchBikes = useCallback(async () => {
        await sendRequest(environment.getAllBikes, 'GET');
    }, [sendRequest]);

    const addNewBike = useCallback(async enteredBike => {
        await sendRequest(environment.addBike,
            'POST',
            JSON.stringify(enteredBike),
        );
        fetchBikes();
    }, [sendRequest]);

    useEffect(() => {
        fetchBikes();
    }, [fetchBikes]);

    useEffect(() => {
        if(!isLoading && !error && data) {
            const bike = data.map(p => {
                return {
                    ...p
                }
            });
            setDataBikes({bikes: bike.reverse()});
        }
    }, [isLoading, error, data]);

    const addNewHandler = () => {
        setIsAddNew(true);
    };

    const cancelAddNewHandler = () => {
        setIsAddNew(false);
    };

    const allFilterHandler = () => {
        dispatchFilter({type: ALL, bikes: dataBikes});
    };

    const maleFilterHandler = () => {
        dispatchFilter({type: MALE, bikes: dataBikes});
    };

    const femaleFilterHandler = () => {
        dispatchFilter({type: FEMALE, bikes: dataBikes});
    };

    return(
        <Bikes>
            {error && <ErrorModal onClean={cleanError}>{error}</ErrorModal>}
            <div className='control__button'>
                <div className='control__button--filter'>
                    <ButtonFilter onClick={allFilterHandler}>All</ButtonFilter>
                    <ButtonFilter onClick={maleFilterHandler}>Male</ButtonFilter>
                    <ButtonFilter onClick={femaleFilterHandler}>Female</ButtonFilter>
                </div>
                {isAdminContext && <div className='control__button--add-new'>
                    <ButtonAddNew onClick={addNewHandler}>Add new</ButtonAddNew>
                </div>}
            </div>
            {isLoading && <p>...Loading</p>}
            {!isLoading && dataBikes?.bikes?.length > 0 && <BikeItem
                bikes={filterState?.bikes ? filterState : dataBikes} />}
            {isAddNew && <AddBike onCancel={cancelAddNewHandler} onAdded={addNewBike} />}
        </Bikes>
    );
};

export default BikesItem;