import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { showTitles, showDetails, showFiltered } from './titles'


export default combineReducers({
  routing: routerReducer,
  title: showTitles,
  detail: showDetails,
  filter: showFiltered
})
