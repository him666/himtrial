import {SHOW_TITLES, SHOW_DETAILS, SHOW_FILTERED} from '../actions'

const initialState = {
    list: [],
    filterText: ''

}

export function showTitles(state = initialState, action) {
    switch (action.type) {
        case SHOW_TITLES:
            return Object.assign({}, state, {list: action.payload})
        
        default:
            return (state)
    }

}

export function showDetails(state = initialState, action) {
    switch (action.type) {
        case SHOW_DETAILS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return (state)
    }
}



export function showFiltered(state = initialState,action){
    return  Object.assign({},state, {filterText: action.payload})
}