import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Component404 from './404';
import Activities from './activities';
import Home from './home';
import MyRoutines from './myRoutines';
import NavBar from './navBar';
import Routines from './routines';

import Users from './users';

const App = () => {
    const [token,setToken]=useState(localStorage.getItem("token")||"");
    const [user,setUser]=useState(
    {
        id:localStorage.getItem("id"),
        name:localStorage.getItem("username")
    }||null);



    return <BrowserRouter>
        <NavBar token={token}></NavBar>

        <Users setToken={setToken} setUser={setUser} user={user}/>
        
        <Switch>
            <Route exact path ="/">
                <Home user={user}></Home>
            </Route>

            <Route exact path ="/routines/">
                <Routines token={token} user={user}></Routines>
            </Route>

            <Route exact path ="/myroutines/">
                <MyRoutines token={token}></MyRoutines>
            </Route>

            <Route exact path ="/activities/">
                <Activities token={token}></Activities>
            </Route>

            <Route path="/*">
                <Component404></Component404>
            </Route>
        </Switch >
    </BrowserRouter>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);