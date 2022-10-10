import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_START,
    HANDLE_QUERY_CHANGE
} from "./action";

const initState = {
    query: 'dragon ball',
    movies: [],
    errorMessage: '',
    isLoading : false
}
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS:
            return {...state, movies: action.payload, isLoading: false, errorMessasge: ''}
        case FETCH_MOVIES_FAILURE:
            return {
                ...state, movies: [], errorMessage: action.payload, isLoading: false
            }
        case FETCH_MOVIES_START:
            return {
                ...state, isLoading : true, errorMessage:""
            } 
        case HANDLE_QUERY_CHANGE:
            return {
                ...state, query: action.payload, errorMessage:''
            }
        default:
            throw new Error(`Invalid action ${action.type}`);
    }
}
export { initState }
export default reducer;