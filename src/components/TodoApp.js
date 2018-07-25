import React from 'react';
import PrivateRoute from './PrivateRoute';
import Home from './public/Home';
import LogIn from './login';
import SignUp from './register';
import Dashboard from './private/Dashboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class TodoApp extends React.Component{
    render(){
        return(
            <Router>
                 <Switch>
                    <Route exact path = '/' component={ Home } />
                    <Route exact path = '/signin' component={ LogIn } />
                    <Route exact path = '/signup' component={ SignUp } />
                    <PrivateRoute exact path = '/dashboard' component={ Dashboard } />
                </Switch>
            </Router>
        )
    }
}

export default TodoApp;