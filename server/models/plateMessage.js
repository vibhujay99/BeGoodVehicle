import mongoose from "mongoose";

const plateSchema = mongoose.Schema({
    cusName : {type: String, required:true},
    vehiModel : {type: String, required: true},
    plateNo : {type: String, required: true},
    selectedFile : {type: String, required: true},
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PlateMessage = mongoose.model('PlateMessage', plateSchema);

export default PlateMessage;