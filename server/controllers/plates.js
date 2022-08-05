import express from 'express';
import mongoose from 'mongoose';

import PlateMessage from '../models/plateMessage.js';

const router = express.Router();

export const getPlates = async (req, res) => {
    try {
        const plateMessage = await PlateMessage.find();

        res.status(200).json(plateMessage);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

export const createPlate = async (req, res) =>{
    const plate = req.body;

    const newPlate = new PlateMessage(plate);

    try {
        
        await newPlate.save();

        res.status(201).json(newPlate);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
};

export const updatePlates = async (req, res) =>{
    const { id:_id} = req.params;
    const plates = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No submission with that ID');

    const updatePlates = await PlateMessage.findByIdAndUpdate(_id, { ...plates, _id}, {new: true});

    res.json(updatePlates);
};

export const deletePlates = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No submission with that ID');

    await PlateMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully'});
};


export default router;