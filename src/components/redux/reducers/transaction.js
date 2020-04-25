const initialState = {
    transaction: [],
    isLoading: false,
};

const transaction = ( state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_TRANSACTION_REJECTED':
            return{
                ...state,
                isLoading: true
            };
        case 'GET_TRANSACTION_FULFILLED':
            return {
                ...state,
                transaction: action.payload.data,
                isLoading: false
            };
        default: 
        return state;
    }
}

export default transaction;