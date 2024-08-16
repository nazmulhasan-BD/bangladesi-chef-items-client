import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Blogs from "../pages/Blogs";
import ChefRecipes from "../components/shared/chef-section/chefRecipes";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "chef-recipes/:nameId",
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>
            },
            {
                path: "about-us",
                element: <AboutUs></AboutUs>
            }
            
        ],
    }
])
