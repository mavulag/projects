import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Dashboard from "./pages/Admin/Dashboard";
import ManageProducts from "./pages/Admin/ManageProducts";
import ManageOrders from "./pages/Admin/ManageOrders";
import ManageUsers from "./pages/Admin/ManageUsers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/manage-products" element={<ManageProducts />} />
      <Route path="/admin/manage-orders" element={<ManageOrders />} />
      <Route path="/admin/manage-users" element={<ManageUsers />} />
    </Routes>
  );
};

export default AppRoutes;
