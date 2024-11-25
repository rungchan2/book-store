import React, { useContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { BookStoreProvider } from "./context/themeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errors from "./components/Errors";
import Signup from "./pages/Signup";
import ResetPW from "./pages/ResetPW";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import Cart from "./pages/Cart";
import OrderSheet from "./pages/OrderSheet";
import { ToastContainer } from "react-toastify";
import OrderList from "./pages/OrderList";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/api/queryClient";
import { default as CustomToastContainer } from "@/components/toast/ToastContainer";

const routerList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset",
    element: <ResetPW />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/books/:id",
    element: <BookDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <OrderSheet />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
];

const router = createBrowserRouter(
  routerList.map((route) => {
    return {
      ...route,
      element: <Layout>{route.element}</Layout>,
      errorElement: <Errors />,
    };
  })
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreProvider>
        <RouterProvider router={router} />
        {/* <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        /> */}
        <CustomToastContainer />
      </BookStoreProvider>
    </QueryClientProvider>
  );
}

export default App;
