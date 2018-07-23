import React from 'react';
import './style.css';
import RegisterForm from './RegisterForm';

class LoginForm extends React.Component {
    constructor(){
        super();
        this.state ={
            isUser : true
        }
    }
    handleSignIn = (e) => {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onSignIn(username, password)
    }
    
    render() {
        return (
            <div className="login-wrapper">
                <h3> Nav Bar lies Here </h3>
                (this.state.isUser)?
                <LoginForm />
                :
                 <RegisterForm />
            </div>
        )
    }

}

export default LoginForm



