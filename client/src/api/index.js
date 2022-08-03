import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});


export const fetchPlates = () => API.get('/plates');
export const createPlate = (newPlate) => API.post('/plates', newPlate);
export const updatePlates = (id, updatePlates) => API.patch(`/plates/${id}`, updatePlates);
export const deletePlates = (id) => API.delete(`/plates/${id}`);