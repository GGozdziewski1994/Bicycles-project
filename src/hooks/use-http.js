import { useReducer, useCallback } from "react"

const initialState = {
    bikes: [],
    loading: false,
    error: null,
}

const httpReducer = (state, action) => {
    if(action.type === 'SEND') {
        return {loading: true, error: null, data: null}
    }

    if(action.type === 'FETCH') {
        return {...state, data: action.data, loading: false}
    }

    if(action.type === 'ERROR') {
        return {...state, error: action.error, loading: false}
    }

    if(action.type === 'CLEAR') {
        return {...state, error: null, loading: false}
    }

    return {...state}
}

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const cleanError = useCallback(() => dispatchHttp({type: 'CLEAR'}, []));

    const sendRequest = useCallback(async (url, method, body) => {
        dispatchHttp({type: 'SEND'})

        try{
            const response = await fetch(url, {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(!response.ok) throw new Error('Something went wrong!');

            const data = await response.json();

            dispatchHttp({type: 'FETCH', data: data});

        } catch(error) {
            dispatchHttp({type: 'ERROR', error: error.message});
        }
    }, []);

    return {
        isLoading: httpState.loading,
        error: httpState.error,
        data: httpState.data,
        sendRequest,
        cleanError,
    }
};

export default useHttp;