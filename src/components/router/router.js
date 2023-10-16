import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomeAll from "../path/Home/HomeAll";
import Jerin from "../path/Jerin/Jerin";
import Register from "../path/logReg/Register";
import Dashboard from "../path/dashboards/Dashboard";

import OrderList from "../path/dashboards/OrderList";
import AddServices from "../path/dashboards/AddServices";
import MakeAdmin from "../path/dashboards/MakeAdmin";
import ManagesServices from "../path/dashboards/ManagesServices";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRouter from "./PrivateRouter";
import Users from "../path/dashboards/Users";
import Booking from "../path/dashboards/Booking";
import Problem from "../path/Problem/Problem";
import PendingServices from "../path/dashboards/PendingServices";



const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/home',
                element:<HomeAll></HomeAll>
            },
            {
                path:'/jerin',
                element:<Jerin></Jerin>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/problem/:id',
                element:<Problem></Problem>,
                loader:({params})=>fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
                path:'/pending',
                element:<PendingServices></PendingServices>
            },
            {
                path:'*',
                element:<div>waiting.....</div>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/orderList/',
                element:<OrderList></OrderList>
            },
            {
                path:'/dashboard/addServices',
                element:<AddServices></AddServices>
            },
            {
                path:'/dashboard/makeAdmin',
                element:<MakeAdmin></MakeAdmin>
            },
            {
                path:'/dashboard/managesService',
                element:<ManagesServices></ManagesServices>
            },
            {
                path:'/dashboard/users',
                element:<Users></Users>
            },
            {
                path:'/dashboard/booking',
                // loader:({params})=>fetch(`http://localhost:4000/booking/${params.id}`),
                element:<Booking></Booking>
            },
           
        ]
    }
    
])


export default router;