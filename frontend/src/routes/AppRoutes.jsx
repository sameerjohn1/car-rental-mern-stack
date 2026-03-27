import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import CarsPage from "../pages/CarsPage";
import ProtectedRoute from "./ProtectedRoute";
import CarDetailPage from "../pages/CarDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/cars" element={<CarsPage />} />

      {/* 🔒 Protected */}
      <Route
        path="/cars/:id"
        element={
          <ProtectedRoute>
            <CarDetailPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
