import React, { useContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { BookStoreProvider } from "./context/themeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errors from "./components/Errors";
import Signup from "./pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Errors />,
  },
  {
    path: "/books",
    element: <div>Books</div>,
  },
  {
    path: "/signup",
    element: <Layout><Signup /></Layout>,
    errorElement: <Errors />,
  },
]);

function App() {
  return (
    <BookStoreProvider>
      <ThemeSwitcher />
      <RouterProvider router={router} />
    </BookStoreProvider>
  );
}

export default App;
