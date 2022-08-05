import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';
import { createPlate, updatePlates } from "../../actions/plates";

const FormPlates = ({ currentId, setCurrentId}) => {
  const [platesData, setPlatesData] = useState ({
    cusName: '',
    vehiModel: '',
    plateNo: '',
    selectedFile: ''
  });

  const plate = useSelector((state) => currentId ? state.plates.find((m)=> m._id === currentId) : null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(plate) setPlatesData(plate);
  }, [plate])

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    if(currentId){
        dispatch(updatePlates(currentId, platesData));

    }else{
        dispatch(createPlate(platesData));
    }

    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPlatesData({
        cusName: '',
        vehiModel: '',
        plateNo: '',
        selectedFile: ''
    });
  }



  
    
    //var vintage = /^([0-9]{1,2}\s[\u0DC1-\u0DD3]\s[0-9]{4})$/;
    //var old = /^([0-9]{1,3}\s[0-9]{4})$/;
    //var modern = /^(([A-Z]{1,2})\s([A-Z]{1,3})\s([0-9]{4}(?<!0{4}))$/;

  return(
    <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentId ? 'Updating' : 'Creating'} Vehicle Submissions</Typography>
                <TextField 
                    name="cusName" 
                    variant="outlined" 
                    label="User Name" 
                    fullWidth
                    value={platesData.cusName}
                    onChange={(e) => setPlatesData({ ...platesData, cusName: e.target.value })}
                />
                <TextField 
                    name="vehiModel" 
                    variant="outlined" 
                    label="Vehicle Model" 
                    fullWidth
                    value={platesData.vehiModel}
                    onChange={(e) => setPlatesData({ ...platesData, vehiModel: e.target.value })}
                />
                <TextField 
                    name="plateNo" 
                    variant="outlined" 
                    label="Plate Number" 
                    fullWidth
                    value={platesData.plateNo}
                    onChange={(e) => setPlatesData({ ...platesData, plateNo: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple ={false}
                        onDone={({base64}) => setPlatesData({ ...platesData, selectedFile: base64})}
                    />
                </div>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size ="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size ="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
  );
};

export default FormPlates