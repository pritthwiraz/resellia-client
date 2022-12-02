import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import ProductCategories from "../../Pages/Home/ProductCategories/ProductCategories";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({params}) => fetch(`laptopModels.json/${params.id}`)
            }
        ]
    },
    {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/addproduct',
                        element: <AddProduct></AddProduct>,
                    },

                    {
                        path: '/dashboard/allbuyers',
                        element: <AllBuyers></AllBuyers>,
                    },
                    {
                        path: '/dashboard/allsellers',
                        element: <AllSellers></AllSellers>,
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrders></MyOrders>,
                    }
                ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;