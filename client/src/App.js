import React from 'react'
import {Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';

//backend: cd server --- npm start
//frontend: cd client --- npm start

const App = () => (
    <BrowserRouter>
        <Container maxWidth = "lg">
            <Switch>
                <Route path = "/" exact component={Home}/>
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App