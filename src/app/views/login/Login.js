import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
    Jumbotron,
    Container
} from 'reactstrap';
import { AvForm, AvField } from "availity-reactstrap-validation";
import './login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    submitForm = () => {
        const { email, password } = this.state;
        console.log("okkkkkkkkk", email)
        console.log("okkkkkkkkk", password)
        if (this.state.email != "" && this.state.password != "") {
            localStorage.setItem("isLogin", "ok");
            window.location.href = "/Dashboard";
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <div className="wrapper_login ">
                <Container>
                    <Col lg="6" className="col_login">
                        <Jumbotron>
                            <h3>
                                <u>Login Form</u>
                            </h3>
                            <hr />
                            <Card>
                                <CardBody>
                                    <AvForm
                                        onSubmit={this.submitForm}
                                        onValidSubmit={this.handleValidSubmit}
                                        // onInvalidSubmit={this.handleInvalidSubmit}
                                        className="form_login"
                                    >
                                        <AvField
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                            name="email"
                                            label="Email"
                                            type="text"
                                            validate={{
                                                required: true,
                                                // email: true
                                            }}
                                        />
                                        <AvField
                                            onChange={this.handlePassword}
                                            value={this.state.password}
                                            name="password"
                                            label="Password"
                                            type="password"
                                            validate={{
                                                required: {
                                                    value: true,
                                                    errorMessage: "Please enter your password"
                                                },
                                                // pattern: {
                                                //     value: "^[A-Za-z0-9]+$",
                                                //     errorMessage:
                                                //         "Your password must be composed only with letter and numbers"
                                                // },
                                                // minLength: {
                                                //     value: 6,
                                                //     errorMessage: "Your password must be between 6 and 16 characters"
                                                // },
                                                // maxLength: {
                                                //     value: 16,
                                                //     errorMessage: "Your password must be between 6 and 16 characters"
                                                // }
                                            }}
                                        />
                                        <FormGroup>
                                            <Button type="submit" id="submit">Submit</Button>

                                        </FormGroup>
                                    </AvForm>
                                </CardBody>
                            </Card>
                        </Jumbotron>
                    </Col>
                </Container>
            </div>

        )
    }
}
