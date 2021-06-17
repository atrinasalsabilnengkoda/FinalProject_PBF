import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../actions/auth";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import loginPict from '../login.JPG';

const styles = () => ({
    "@global": {
        body: {
            backgroundColor: "#d0efff"
        }
    },
    paper: {
        marginTop: 100,
        display: "flex",
        padding: 20,
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f50057"
    },
    form: {
        marginTop: 1
    },
    errorText: {
        color: "#f50057",
        marginBottom: 5,
        textAlign: "center"
    }
});


class Login extends Component {
    state = { email: "", password: "" };
    handleEmailChange = ({ target }) => {
        this.setState({ email: target.value });
    };
    handlePasswordChange = ({ target }) => {
        this.setState({ password: target.value });
    };
    handleSubmit = () => {
        const { dispatch } = this.props;
        const { email, password } = this.state;
        dispatch(loginUser(email, password));
    };

    render() {
        const { classes, loginError, isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
            return (
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                        {/* <Avatar className={classes.avatar}>
                        </Avatar> */}
                        <img src={loginPict} width="350px" height="350px"/><br/>
                        <Typography component="h1" variant="h5">
                            LOGIN
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            onChange={this.handleEmailChange} />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Kata Sandi"
                            type="password"
                            id="password"
                            onChange={this.handlePasswordChange} />
                        {loginError && (
                            <Typography component="p" className={classes.errorText}>
                                Kata Sandi dan E-mail salah.
                            </Typography>
                        )}
                        <Button
                        className="button"
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}>
                            LOGIN
                        </Button>
                        <br />
                        Belum punya akun? 
                        <Link to='/join'>
                            <a href="/join">Daftar Sekarang</a>
                        </Link>
                    </Paper>
                </Container>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default withStyles(styles)(connect(mapStateToProps)(Login));