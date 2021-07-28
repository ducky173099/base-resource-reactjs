import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const submenus = [
    [
        {
            title: "Home 1",
            target: "Home-1",
        },
        {
            title: "Home 2",
            target: "Home-2",
        },
        {
            itle: "Home 3",
            target: "Home-3",
        },
    ],
    [
        {
            title: "Template 1",
            target: "/template",
        },
    ],
];

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            pathname: "/dashboard"
        }
    }


    // componentDidUpdate = () => {
    //     this.setState({
    //         pathname: window.location.pathname
    //     })
    // }

    handleActive = (pathname) => {
        this.setState({
            pathname: pathname
        })
    }

    render() {
        // console.log("pathname: ", this.props.location)
        const { isOpen, toggle } = this.props;
        const {pathname} = this.state;
        console.log("pathanem: ", pathname)
        return (
            <div className={classNames("sidebar", { "is-open": isOpen })}>
                <div className="sidebar-header">
                    <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                        &times;
                    </span>
                    <h3>DucKy Sidebar</h3>
                </div>
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <NavItem onClick={() => this.handleActive("/dashboard")} className={pathname == "/dashboard" ? "activeSidebar" : ""}>
                            <NavLink tag={Link} to={"/dashboard"} >
                                <FontAwesomeIcon icon={faHome} className="mr-2" />
                                Dashboard
                            </NavLink>
                        </NavItem>
                        {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
                        <NavItem onClick={() => this.handleActive("/about")} className={pathname == "/about" ? "activeSidebar" : ""}>
                            <NavLink tag={Link} to={"/about"}>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                                About
                            </NavLink>
                        </NavItem>
                        <SubMenu title="Template" icon={faCopy} items={submenus[1]} />
                        <NavItem onClick={() => this.handleActive("/count")} className={pathname == "/count" ? "activeSidebar" : ""}>
                            <NavLink tag={Link} to={"/count"}>
                                <FontAwesomeIcon icon={faImage} className="mr-2" />
                                Count
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => this.handleActive("/faq")} className={pathname == "/faq" ? "activeSidebar" : ""}>
                            <NavLink tag={Link} to={"/faq"}>
                                <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                                FAQ
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => this.handleActive("/contact")} className={pathname == "/contact" ? "activeSidebar" : ""}>
                            <NavLink tag={Link} to={"/contact"}>
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        )
    }
}


export default Sidebar;
