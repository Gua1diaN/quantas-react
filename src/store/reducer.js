import * as actionTypes from './actions'
;
let initialState = {
    airport:[],
    currentAirport:{}
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.LOAD){
        console.log(action.data)
        initialState = {
            ...state,
            airport:action.data
        }
        return initialState;
    }else if(action.type === actionTypes.GET){
        let detail = state.airport.slice(action.id, action.id+1);
        console.log(detail[0])
        initialState = {
            ...state,
            currentAirport:detail[0]
        }
        return initialState;
    }
    return state;
}

export default reducer;