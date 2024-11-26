import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddLabtest from "./components/AddLabtest";
import AddNurses from "./components/AddNurses";
import ViewLabtests from "./components/ViewLabtests";
import ViewNurses from "./components/ViewNurses";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import ViewBookings from "./components/ViewBookings";

// Layout with Navbar and Footer
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
);

// Layout without Navbar and Footer
const AuthLayout = ({ children }) => <div>{children}</div>;

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/addlabtests"
          element={
            <MainLayout>
              <AddLabtest />
            </MainLayout>
          }
        />
        <Route
          path="/viewlabtests"
          element={
            <MainLayout>
              <ViewLabtests />
            </MainLayout>
          }
        />
        <Route
          path="/addnurses"
          element={
            <MainLayout>
              <AddNurses />
            </MainLayout>
          }
        />
        <Route
          path="/viewnurses"
          element={
            <MainLayout>
              <ViewNurses />
            </MainLayout>
          }
        />

        <Route
          path="/viewbookings"
          element={
            <MainLayout>
              <ViewBookings />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

        {/* Routes without Navbar and Footer */}
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
