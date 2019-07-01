import React, { useState } from 'react';

const Login = () => {

    const [user, setState] = useState({
        email: "",
        password: ""
    });

    // Controlled Form 
    const onChange = (e) => setState({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Login Submit!')
    }
    

    const { email, password } = user;

    return (
        <div className="form-container">
            <h1> 
              Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onchange={onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onchange={onChange} />
              </div>
              <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    );
};

export default Login;