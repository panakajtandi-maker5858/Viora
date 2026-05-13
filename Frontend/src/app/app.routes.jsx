import { createBrowserRouter } from "react-router";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import CreateProduct from "../features/products/pages/CreateProduct";
import Dashboard from "../features/products/pages/Dashboard";
import Protected from "../features/auth/components/Protected";
import AppLayout from "./Applayout";

export const routes = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
   {
    element: <AppLayout/> ,
    children: [
        {
            path: "/",
            element: <div>Home Page</div>
        } ,
        {
            path: "/seller" ,
            children: [
                {
                    path: "/seller/create-product",
                    element: <Protected role="seller">
                        <CreateProduct/>
                    </Protected>
                } ,
                {
                    path: "/seller/dashboard",
                    element: <Protected role="seller">
                        <Dashboard/>
                    </Protected>
                }
            ]
        }
    ]
   }
])