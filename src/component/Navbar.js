import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from '../actions/auth';
import Logo from '../logo.png';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';

class Navbar extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <nav className="navbar navbar-expand-lg bg-info text-primary">
                <div className="navbar-brand p-2"><img src={Logo} width='50px' height='50px'></img><b> Little </b><b className="text-light">Star</b></div>
                <ul className="navbar-nav">
                    <li className="nav-item p-2">
                        <Link to='/'><HomeIcon/><b className="text-white"> Home </b></Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link to='/bracelets'><b className="text-white"> Bracelets </b></Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link to='/couples'><b className="text-white"> Couples </b></Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link to='/necklaces'><b className="text-white"> Necklaces </b></Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link to='/rings'><b className="text-white"> Rings </b></Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link to='/about'><InfoIcon/><b className="text-white"> About </b></Link>
                    </li>
                    <li className="float-right p-2">
                        <Link onClick={this.handleLogout}><PersonIcon/><b className="text-white"> Logout</b></Link>
                        {isLoggingOut && <p>Logging Out....</p>}
                        {logoutError && <p>Error logging out</p>}
                    </li>
                </ul>
                <hr />
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(Navbar);