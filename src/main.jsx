import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./view/Home.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import Dashboard from "./view/Dashboard.jsx";
import Projects from "./view/Projects.jsx";
import Messages from "./view/Messages.jsx";
import Settings from "./view/Settings.jsx";
import Notifications from "./view/Notifications.jsx";
import PR_main from "./view/Purchase_Requistion/PR_main.jsx";

const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/home', element: <Home/>},
    {path: '/pr', element: <PR_main/>},
    {path: '/dashboard/', element: <Dashboard/>},
    {path: '/projects', element: <Projects/>},
    {path: '/messages', element: <Messages/>},
    {path: '/settings', element: <Settings/>},
    {path: '/notifications', element: <Notifications/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    <RouterProvider router={router}/>
)
