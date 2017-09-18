
import axios from 'axios'

export const SHOW_TITLES = 'SHOW_TITLES'

export const SHOW_DETAILS = 'SHOW_DETAILS'

export const SHOW_FILTERED = 'SHOW_FILTERED'

//delete this 
export const SHOW_USERS  = 'SHOW_USERS'



//

/*
 * crear mas acciones xd 
*/



export function showTitles() {
    return(dispatch, getState) => {
        axios.get('https://mfwkweb-api.clarovideo.net/services/content/list?api_version=v5.5&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=omfia3nkv8mf76v2puks4jk4v6&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869')
          .then((resp) => {
              dispatch( { type: SHOW_TITLES, payload: resp.data } )
          })
    }
}


export function showDetails(titleId) {
    return(dispatch,getState) => {
       /* axios.get('https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.5&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=omfia3nkv8mf76v2puks4jk4v6&group_id='+titleId)
          .then((resp) => {
              dispatch( { type: SHOW_DETAILS, payload: resp.data } )
          })*/
          fetch('https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.5&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=omfia3nkv8mf76v2puks4jk4v6&group_id='+titleId, {
            headers: {
                'Accept': 'application/json',
            },
        }).then((response) => response.json()
            .catch(err => {
                console.err(`'${err}' happened!`);
                return {};
            }))
            .then((json) => {
              
                dispatch( { type: SHOW_DETAILS, payload: json.response.group.common} )
            })
            .catch((err) => { console.log('fetch request failed: ', err) }
            )
    }
}

export function showFiltered(filter,titles) {
    
    return(dispatch, getState) => {

        dispatch( { type: SHOW_TITLES, payload: titles } )
    }
}