  
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Router, Switch ,withRouter} from 'react-router-dom';
import SignIn from './Containers/SignIn/SignIn';
import SignUp from './Containers/SignUp/SignUp';
import Editor from './Containers/Editor/Editor';
import MyProvider from './Context'

function HomePage(props){
    return(
        
        <BrowserRouter  >
        <MyProvider>
        <Switch>
                <Route exact path="/signIn" component = {SignIn}/>
                <Route exact path="/signUp" component = {SignUp}/>
                <Route exact path="/editor" component = {Editor}/>
            </Switch> 
        </MyProvider>
            
        </BrowserRouter>
    )
}
export default HomePage;