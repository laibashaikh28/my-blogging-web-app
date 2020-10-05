  
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Router, Switch ,withRouter} from 'react-router-dom';
import SignIn from './Containers/SignIn/SignIn';
import SignUp from './Containers/SignUp/SignUp';

function HomePage(props){
    return(
        <BrowserRouter  >
            <Switch>
                <Route exact path="/signIn" component = {SignIn}/>
                <Route exact path="/signUp" component = {SignUp}/>
            </Switch> 
        </BrowserRouter>
    )
}
export default HomePage;