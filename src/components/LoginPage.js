import React, { Component } from 'react';
import "../styles/App.css";


export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="http://localhost:7000/auth/login" method="POST">
                <input type="text" name="loginUsername"/>
                <input type="password" name="loginPassword"/>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}