import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Cart from "./components/addToCart.jsx";
import Nike from "./components/Nike.jsx";
import Puma from "./components/Puma.jsx";
import Adidas from "./components/Adidas.jsx";
import JimmyChoo from "./components/JimmyChoo.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/nike" element={<Nike />} />
      <Route path="/puma" element={<Puma />} />
      <Route path="/adidas" element={<Adidas />} />
      <Route path="/jimmyChoo" element={<JimmyChoo />} />
      

    </>
  )
)



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={route} />
    </Provider>
  </StrictMode>
);
