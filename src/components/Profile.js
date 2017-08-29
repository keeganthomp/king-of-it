import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../styles/App.css";


export default class Profile extends Component {

    render() {
    console.log("this propss", this.props )
        return (
            <div>
                <h1>Profile Page</h1>
                <h2>HI {this.props.match.params.currentUser}</h2>
                <Link to={`/`}><button>Home</button></Link>
            </div>
        );
    }
}

