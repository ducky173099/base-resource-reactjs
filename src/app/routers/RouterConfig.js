import React from "react";
import DashboardScreen from '../views/dashBoard/DashboardScreen';
import TemplateScreen from "../views/template/TemplateScreen";
import AboutScreen from "../views/about/AboutScreen";
import CountScreen from "../views/count/CountScreen";

const RouterConfig = [
    {
        path: '/dashboard',
        component: DashboardScreen,
        moduleId: 1
    },
    {
        path: '/about',
        component: AboutScreen,
        moduleId: 5,
    },
    {
        path: '/template',
        component: TemplateScreen,
        moduleId: 5,
    },
    {
        path: '/count',
        component: CountScreen,
        moduleId: 5,
    },
];
export default RouterConfig;