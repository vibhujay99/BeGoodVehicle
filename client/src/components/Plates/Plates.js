import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';

import Plate from './Plate/Plate';

import useStyles from './styles';

const Plates = ({ setCurrentId}) => {

    const plates = useSelector((state) => state.plates);
    const classes = useStyles();

    console.log(plates);
  return (
    !plates.length ? <CircularProgress/> :(
        <Grid className={classes.mainContainer} container alignItems = "stretch" spacing={3}>
            {plates.map((plate)=>(
                <Grid key={plate._id} item xs={12} sm={6}>
                    <Plate plate ={plate} setCurrentId={setCurrentId}/>

                </Grid>
            ))}

        </Grid>
    )
  );
}

export default Plates