import React, { useContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { BookStoreProvider } from "./context/themeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
function App() {
  return (
    <BookStoreProvider>
      <ThemeSwitcher />
      <Layout>
        <Home/>
      </Layout>
    </BookStoreProvider>
  );
}

export default App;
