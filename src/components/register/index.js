import React from 'react';

const RegisterForm = (props) => {
    return(
        <div className="form-div">
        <h2>Register Form</h2>
        <form onSubmit={this.handleSignIn} className="login-form">
            <h3>Sign in</h3>
    
            <input className="login-input" type="text" ref="username" placeholder="enter you username/ email" required /> <br />
            <input className="login-input" type="password" ref="password" placeholder="enter password" required /> <br />
            <input className="login-submit" type="submit" value="Login" />
        </form>
            <small> Not Registered Yet </small> <br />
            <a href="#" > Regester </a> 

        </div>
    )

}

export default RegisterForm