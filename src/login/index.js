import React from 'react';
import './style.css';
import RegisterForm from './RegisterForm';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            isUser: true
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
                <div className="form-div">
                    <form onSubmit={this.handleSignIn} className="login-form">
                        <h3>Sign in</h3>

                        <input className="login-input" type="text" ref="username" placeholder="enter you username/ email" required /> <br />
                        <input className="login-input" type="password" ref="password" placeholder="enter password" required /> <br />
                        <input className="login-submit" type="submit" value="Login" />
                    </form>
                    <small> Not Registered Yet </small> <br />
                    <a href="#"> Regester </a>

                </div>
            </div>
        )
    }

}

export default LoginForm



