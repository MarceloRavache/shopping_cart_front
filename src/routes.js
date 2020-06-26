import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home/index';
import ListPages from './pages/ListPages/index';
import CreatePage from './pages/CreatePage/index';


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/list-pages" component={ListPages}/>
                <Route path="/create-page" component={CreatePage}/>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
