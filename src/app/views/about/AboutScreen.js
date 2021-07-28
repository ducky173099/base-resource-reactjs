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

class AboutScreen extends Component {
    render() {
        return (
            <div className="wrapper_login ">
                <Container>
                    <Col lg="6" className="col_login">
                        <Jumbotron>
                            <Card>
                                <CardBody>
                                    <AvForm
                                        onSubmit={this.submitForm}
                                        onValidSubmit={this.handleValidSubmit}
                                        // onInvalidSubmit={this.handleInvalidSubmit}
                                        className="form_login"
                                    >
                                        <AvField
                                            // value={this.state.email}
                                            // onChange={this.handleEmail}
                                            name="nameAbout"
                                            label="name about"
                                            type="text"
                                            validate={{
                                                required: {
                                                    value: true,
                                                    errorMessage: "Please enter your about"
                                                },
                                            }}
                                        />
                                        <AvField
                                            // onChange={this.handlePassword}
                                            // value={this.state.password}
                                            name="desc"
                                            label="desc"
                                            type="text"
                                            validate={{
                                                required: {
                                                    value: true,
                                                    errorMessage: "Please enter your desc"
                                                },
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

export default AboutScreen;