import React from 'react';
import { Link } from 'react-router-dom';


const Login = ( props ) => {

    return (
        <div className="auth-container">
            <h2>login</h2>
            <hr />
            <form onSubmit={ ( e ) => {
                e.preventDefault();
                props.handleLogin();
            } } >
                <p>Username:</p>
                <input name="username" type="text" value={ props.formData.username } onChange={ props.handleChange } />
                <p>Password:</p>
                <input name="password" type="password" value={ props.formData.password } onChange={ props.handleChange } />
                <hr />
                <button>Login</button>
                <Link className='link' to="/register">Register</Link>
            </form>
        </div>
    );
}

export default Login;