import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home.js";
import Shop from "./Components/Shop/Shop.js";
import NavBar from "./Components/NavBar/NavBar.js";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./Components/CartContext.js";

const Layout = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // <-- provides the router context
        children: [
            { index: true, element: <Home /> }, // index = default route
            { path: "shop", element: <Shop /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
