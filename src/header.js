import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./header.css"

const url = "https://groceryjwt.herokuapp.com/api/auth/userinfo"

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: ''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus', 'loggedOut');
        sessionStorage.removeItem('ltk');
        this.setState({ userData: '' })
        this.props.history.push('/')
    }
    conditionalHeader = () => {
        if (this.state.userData.name) {
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone]
            sessionStorage.setItem('userInfo', outArray);
            sessionStorage.setItem('loginStatus', 'loggedIn');
            return (
                <>
                    <Link className="btn btn-warning me-4 text-white" to="/">
                        Hi {data.name}
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                        LogOut
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/register"><button className="btn me-3 btn-danger text-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</button></Link>
                    <Link to="/login"> <button className="btn me-1 btn-primary text-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button></Link>

                </>
            )
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand ms-3 text-white" to="/"><span className="text-warning">e</span>Grocery</Link>
                        <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon btn-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex ms-auto">

                            {this.conditionalHeader()}
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'y-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userData: data
                })
            })
    }
}


export default withRouter(Header);