import axios from 'axios';


export const FETCH_DATA = 'FETCH_DATA';

export function fetchMobilesData() {
    return (dispatch) => {
        axios.get('http://localhost:3001/phones')
            .then(response => {
                dispatch({ type: FETCH_DATA, payload: response.data })
            })
    }
}