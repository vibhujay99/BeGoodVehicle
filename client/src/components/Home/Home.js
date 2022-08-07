import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPlates } from '../../actions/plates';
import Plates from '../Plates/Plates';
import FormPlates from '../Form/FormPlates';

import useStyles from './styles';

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
  
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPlates());

    }, [currentId, dispatch]);

  return (
    <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={7}>
                        <Plates setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    
                        <FormPlates currentId={currentId} setCurrentId={setCurrentId}/>
                        
                    </Grid>
                    
                </Grid>
            </Container>
    </Grow>
  );
}

export default Home