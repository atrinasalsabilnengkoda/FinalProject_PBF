import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { RegisterUser } from "../actions/auth";
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

class Join extends Component {
    
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
        dispatch(RegisterUser(email, password));
    };

    render() {
        const { classes, RegisterError, isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
            return (
                <Container component="main" maxWidth="xs">
                    <Paper className={classes.paper}>
                    <img src={loginPict} width="350px" height="350px"/><br/>
                        <Typography component="h1" variant="h5">
                            JOIN
                        </Typography>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="E-Mail"
                            name="email"
                            onChange={this.handleEmailChange}/>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Kata Sandi"
                            type="password"
                            id="password"
                            onChange={this.handlePasswordChange}/>
                        {RegisterError && (
                            <Typography component="p" className={classes.errorText}>
                                Kata sandi dan E-mail salah.
                            </Typography>
                        )}

                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}>
                            JOIN
                        </Button>

                        <br/>
                        Sudah punya akun? 
                        
                        <Link to='/login'>
                            <a href="/login">Klik login</a>
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
        RegisterError: state.auth.RegisterError,
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default withStyles(styles)(connect(mapStateToProps)(Join));