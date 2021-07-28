import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    // NavbarToggler,
    // Collapse,
    // Nav,
    // NavItem,
    // NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }

    onMouseEnter = () => {
        this.setState({ dropdownOpen: true });
    }

    onMouseLeave = () => {
        this.setState({ dropdownOpen: true });
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    logout = () => {
        localStorage.removeItem("isLogin");
        window.location.href = "/login"
    }

    render() {

        const { toggleSidebar } = this.props;
        return (
            <Navbar
                color="light"
                light
                className="navbar shadow-sm p-3 mb-5 bg-white container_header"
                expand="md"
            >
                <Button color="info" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <Dropdown className="d-inline-block user_dropdown" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                    </DropdownToggle>
                    <DropdownMenu>
                        {/* <DropdownItem > */}
                        <Button onClick={this.logout}>
                            Logout
                        </Button>
                        {/* </DropdownItem> */}
                        <DropdownItem divider />
                        <Button onClick={this.logout}>
                            Change password
                        </Button>
                    </DropdownMenu>
                </Dropdown>
            </Navbar>
        )
    }
}

export default Header;

