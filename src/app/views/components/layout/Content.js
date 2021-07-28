import React, { Component, Suspense } from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import RouterConfig from "../../../routers/RouterConfig";

import Header from "./Header";
import Footer from "./Footer";

// const DashBoard = React.lazy(() => import('../../dashBoard/DashboardScreen'));
// const Template = React.lazy(() => import('../../template/TemplateScreen'));
// const Login = React.lazy(() => import('../../login/Login'));


class Content extends Component {

    render() {
        const { sidebarIsOpen, toggleSidebar } = this.props;
        return (
            <Container
                fluid
                className={classNames("content", { "is-open": sidebarIsOpen })}
            >
                <Header toggleSidebar={toggleSidebar} />
                {/* <Redirect to="/dashboard" /> */}

                <Switch>
                    {/* <Route exact path="/dashboard" component={DashBoard} />
                    <Route exact path="/template" component={Template} /> */}
                    {
                        localStorage.getItem("isLogin") === "ok" ?
                            RouterConfig.map((route, i) => {
                                return(
                                    <Route
                                    key={i}
                                    exact
                                    path={route.path}
                                    component={route.component}
                                />
                                )
                            })
                            :
                            <Redirect to="/login" />
                    }
                </Switch>
                <Footer />
            </Container>
        )
    }
}

export default Content;
