import React, { Component, useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const { icon, title, items } = this.props;
        const { collapsed } = this.state;
        return (
            <div>
                <NavItem
                    onClick={this.toggle}
                    className={classNames({ "menu-open": !collapsed })}
                >
                    <NavLink className="dropdown-toggle">
                        <FontAwesomeIcon icon={icon} className="mr-2" />
                        {title}
                    </NavLink>
                </NavItem>
                <Collapse
                    isOpen={!collapsed}
                    navbar
                    className={classNames("items-menu", { "mb-1": !collapsed })}
                >
                    {items.map((item, index) => (
                        <NavItem key={index} className="pl-4">
                            <NavLink tag={Link} to={item.target}>
                                {item.title}
                            </NavLink>
                        </NavItem>
                    ))}
                </Collapse>
            </div>
        );
    }
}

export default SubMenu;
