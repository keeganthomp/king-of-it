import React, { Component } from 'react';
import "../styles/App.css";


export default class SignupPage extends Component {
    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form action="http://localhost:7000/auth/signup" method="POST">
                <input type="text" name="username"/>
                <input type="password" name="password"/>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}