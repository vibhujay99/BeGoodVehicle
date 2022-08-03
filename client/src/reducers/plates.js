
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";


// eslint-disable-next-line import/no-anonymous-default-export
export default (plates = [], action) =>{
    switch (action.type) {
        case DELETE:
            return plates.filter((plate) => plate._id !== action.payload);
        case UPDATE:
            return plates.map((plate) => plate._id === action.payload._id ? action.payload : plate);
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...plates, action.payload];
        default:
            return plates;
    }
}