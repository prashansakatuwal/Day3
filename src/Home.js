import React, { Component } from 'react';
import HomeImage from './images/home.jpg';
import { Link, Redirect } from "react-router-dom";
import './Registration';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "",
                user_password: ""
            }
        };
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };

    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "admin@g.com" && user_password === "123") {
            localStorage.setItem("token", "T");
            this.setState({
                islogged: true
            });
        }
        event.preventDefault();
    };
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/NewHome" />;
        }
        return (
            <div className="home" style={{
                backgroundImage: `url(${HomeImage})`,
                backgroundSize: "cover",
                height: "88vh"

            }}>
                
                <div className="container">
                    <form onSubmit={this.login} className="form-signin">
                        
                        <h1>LOGIN FORM</h1>
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    name="user_id"
                                    onChange={this.handleFormChange}
                                    placeholder="Enter Username"
                                />
                                <input
                                    type="password"
                                    name="user_password"
                                    onChange={this.handleFormChange}
                                    placeholder="Enter Password"
                                />
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                        <Link to={'/Registration'}>
                            <button > Register </button>
                        </Link>

                    </form>




                </div>
            </div>
        )
    }
}
export default Home;