import logo from './assets/logo.svg';
import './App.css';
import Header from "./layOut/Header";
import Footer from "./layOut/Footer";
import About from "./layOut/About";
import Home from "./layOut/Home";
import Services from "./layOut/Services";
import Contact from "./layOut/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
