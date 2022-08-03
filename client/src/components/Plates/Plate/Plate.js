import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";

import { deletePlates } from '../../../actions/plates';


const Plate = ({ plate, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
        <CardMedia className={classes.media} image={plate.selectedFile} title={plate.cusName} />
        <div className={classes.overlay}>
            <Typography variant="h6">{plate.vehiModel}</Typography>
            <Typography variant="h6">{plate.plateNo}</Typography>
            <Typography variant="body2">{moment(plate.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(plate._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            
            <CardContent>
                <Typography className={classes.vehiModel}  variant="h5" gutterBottom>{plate.plateNo}</Typography>
                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePlates(plate._id))}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
    </Card>
  );
}

export default Plate