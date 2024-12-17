import './assets/css/styles.css';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import {Suspense, useState} from "react";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Error404Page from "./pages/Error404";
import {PageContextProvider} from "./context/PageContext";
import CarVendorsPage from "./pages/CarVendorsPage";
import {CarsContextProvider} from "./context/CarsContext";

function App() {

    const [byPropsPageName, setByPropsPageName]
        = useState('Home by Props');

    return (<BrowserRouter>
            <PageContextProvider>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<MainLayout byPropsPageName={byPropsPageName}/>}>
                            <Route path="" element={<IndexPage setByPropsPageName={setByPropsPageName}/>}/>

                            {/* Лениво загружаемый AboutPage */}
                            <Route path="about" element={<Suspense fallback={<div>Loading...</div>}>
                                <AboutPage setByPropsPageName={setByPropsPageName}/>
                            </Suspense>}/>

                            <Route path="projects" element={<Suspense fallback={<div>Loading...</div>}>
                                <ProjectsPage setByPropsPageName={setByPropsPageName}/>
                            </Suspense>}/>

                            <Route path="contact" element={<Suspense fallback={<div>Loading...</div>}>
                                <ContactPage setByPropsPageName={setByPropsPageName}/>
                            </Suspense>}/>

                            <Route path="cars" element={<Suspense fallback={<div>Loading...</div>}>
                                <CarsContextProvider>

                                    <CarVendorsPage />
                                </CarsContextProvider>
                            </Suspense>}/>


                            <Route path="*" element={<Error404Page setByPropsPageName={setByPropsPageName}/>}/>
                        </Route>
                    </Routes>
                    <ToastContainer/>
                </div>
            </PageContextProvider>
        </BrowserRouter>);
}

export default App;
