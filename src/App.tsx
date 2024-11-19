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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Errors />,
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
    errorElement: <Errors />,
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPW />
      </Layout>
    ),
    errorElement: <Errors />,
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    errorElement: <Errors />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
    errorElement: <Errors />,
  },
  {
    path: "/books/:id",
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
    errorElement: <Errors />,
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/order",
    element: (
      <Layout>
        <OrderSheet />
      </Layout>
    ),
  },
  {
    path: "/orderlist",
    element: (
      <Layout>
        <OrderList />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <BookStoreProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
      <ToastContainer
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
      />
    </BookStoreProvider>
  );
}

export default App;
