import React, {Component, lazy, Suspense} from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Routes, Route, BrowserRouter} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import CarsPage from "./pages/CarsPage";
import CarModelPage from "./pages/CarModelPage";


// Лениво загружаем AboutPage
const AboutPage = lazy(() => import('./pages/AboutPage'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<HomePage />} />

                {/* Лениво загружаемый AboutPage */}
                <Route path="about" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <AboutPage />
                    </Suspense>
                } />

                <Route path="cars" element={<CarsPage />} />
                    {/*<Route path="cars/:car_slug" element={<CarModelPage />} />*/}
                    <Route path="cars/:seo_text/:car_slug" element={<CarModelPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>

        <ToastContainer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
