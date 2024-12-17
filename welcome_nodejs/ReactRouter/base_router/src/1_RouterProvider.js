import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/contacts',
    element: <ContactsPage />
  }
]);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
