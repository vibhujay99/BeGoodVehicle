import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api';

export const getPlates = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlates();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createPlate = (plate) => async (dispatch) => {
    try {
        const { data } = await api.createPlate(plate);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePlates = (id, plates) => async (dispatch) =>{
    try {
        const {data} = await api.updatePlates(id, plates);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePlates = (id) => async (dispatch) => {
    try {
        await api.deletePlates(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}