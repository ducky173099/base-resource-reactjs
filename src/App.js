// import React, { Component, Suspense } from 'react';
// import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import LayoutRoute from './app/views/components/layout/LayoutRoute';
// import EmptyLayout from './app/views/components/layout/EmptyLayout';
// import MainLayout from './app/views/components/layout/MainLayout';
// import PageSpinner from './app/views/components/PageSpinner';
// // import './styles/reduction.scss';
// import './index.css';

// const loading = (
//     <div className="pt-3 text-center">
//         <div className="sk-spinner sk-spinner-pulse"></div>
//     </div>
// )

// const DashboardPage = React.lazy(() => import('./app/views/DashBoard/DashboardPage'));


// const getBasename = () => {
//     return `/${process.env.PUBLIC_URL.split('/').pop()}`;
// };
// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={

//         }
//     }

//     render() {
//         return (
//             // <BrowserRouter>
//             //     <Suspense fallback={loading}>
//             //         <Switch>
//             //             <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
//             //             <Route path="/" name="Home" render={props => <AppLayout {...props} />} />
//             //         </Switch>
//             //     </Suspense>
//             // </BrowserRouter>

//             <BrowserRouter basename={getBasename()}>
//                 {/* <GAListener> */}
//                     <Switch>
//                         <LayoutRoute
//                             exact
//                             path="/login"
//                             // layout={EmptyLayout}
//                             // component={props => (
//                             //     <AuthPage {...props} authState={STATE_LOGIN} />
//                             // )}
//                         />
//                         <LayoutRoute
//                             exact
//                             path="/signup"
//                             // layout={EmptyLayout}
//                             // component={props => (
//                             //     <AuthPage {...props} authState={STATE_SIGNUP} />
//                             // )}
//                         />

//                         <MainLayout breakpoint={this.props.breakpoint}>
//                             <React.Suspense fallback={<PageSpinner />}>
//                                 <Route exact path="/" component={DashboardPage} />
//                                 {/* <Route exact path="/login-modal" component={AuthModalPage} />
//                                 <Route exact path="/buttons" component={ButtonPage} />
//                                 <Route exact path="/cards" component={CardPage} />
//                                 <Route exact path="/widgets" component={WidgetPage} />
//                                 <Route exact path="/typography" component={TypographyPage} />
//                                 <Route exact path="/alerts" component={AlertPage} />
//                                 <Route exact path="/tables" component={TablePage} />
//                                 <Route exact path="/badges" component={BadgePage} />
//                                 <Route
//                                     exact
//                                     path="/button-groups"
//                                     component={ButtonGroupPage}
//                                 />
//                                 <Route exact path="/dropdowns" component={DropdownPage} />
//                                 <Route exact path="/progress" component={ProgressPage} />
//                                 <Route exact path="/modals" component={ModalPage} />
//                                 <Route exact path="/forms" component={FormPage} />
//                                 <Route exact path="/input-groups" component={InputGroupPage} />
//                                 <Route exact path="/charts" component={ChartPage} /> */}
//                             </React.Suspense>
//                         </MainLayout>
//                         <Redirect to="/" />
//                     </Switch>
//                 {/* </GAListener> */}
//             </BrowserRouter>
//         )
//     }
// }

// export default App;

import React, {Suspense, Component } from "react";
import { 
    BrowserRouter
    , Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./app/views/components/layout/Sidebar";
import Content from "./app/views/components/layout/Content";
import "./App.css";
import Login from "./app/views/login/Login";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarIsOpen: true,

        }
    }

    toggleSidebar = () => {
        const { sidebarIsOpen } = this.state;
        this.setState({
            sidebarIsOpen: !sidebarIsOpen
        })
    }

    render() {
        // console.log("pathname: ", this.props.location)
        const { sidebarIsOpen } = this.state;
        return (
            (localStorage.getItem("isLogin") === "ok") ? (
                <BrowserRouter>
                    <Suspense fallback={<p>laoding....</p>}>
                        <div className="App wrapper">
                            <Sidebar toggle={this.toggleSidebar} isOpen={sidebarIsOpen} />
                            <Content toggleSidebar={this.toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
                        </div>
                    </Suspense>
                    {/* <Route exact path="/login" component={Login} /> */}

                </BrowserRouter>)
                : (
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                )

        )
    }
}

export default App;