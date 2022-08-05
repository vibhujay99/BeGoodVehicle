import mongoose from "mongoose";


const plateSchema = mongoose.Schema({
    cusName : {type: String, required:[true, "Name is required"]},
    vehiModel : {type: String, required: [true, "Vehicle Model is required"]},
    plateNo : {type: String, 
        required: [true, "Plate number is required"], 
        validate: [
            {
                validator: function(plateNo){
                    return /^(([A-Z]{1,2})\s([A-Z]{1,3})\s([0-9]{4}(?<!0{4}))||([0-9]{1,3}\s[0-9]{4})||([0-9]{1,2}\s[\u0DC1-\u0DD3]\s[0-9]{4}))$/.test(plateNo);
                },
                message: "Enter a valid plate number",
                
            },
            //([0-9]{1,3}\s[0-9]{4})
            //([0-9]{1,2}\s[\u0DC1-\u0DD3]\s[0-9]{4})
        ],
    },
    selectedFile : {type: String, required: [true, "Picture is required"]},
    createdAt: {
        type: Date,
        default: new Date()
    },
});



const PlateMessage = mongoose.model('PlateMessage', plateSchema);



export default PlateMessage;