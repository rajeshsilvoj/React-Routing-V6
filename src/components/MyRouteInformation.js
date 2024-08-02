import {createBrowserRouter} from 'react-router-dom';
import React from 'react'
import App from '../App';
import Hello from './Hello';
import Navbar from './Navbar';
import About from './About';
const MyRouteInformation= new createBrowserRouter([
    {
        element:<App/>,
        path:'/',
    },
    {
        element:<Hello/>,
        path:'/hello'
    },
    {
        element:<Navbar/>,
        path:'/nav'
    },
    {
        element:<About/>,
        path:"/about"
    }
])
export default MyRouteInformation;