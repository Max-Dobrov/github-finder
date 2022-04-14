import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
        <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main>
                <Routes>
                    <Route exact path="/" element={ <Home /> } />
                    <Route exact path="/about" element={ <About /> } />
                    <Route exact path="/notfound" element={ <NotFound /> } />
                    <Route exact path="/*" element={ <NotFound /> } />
                </Routes>
            </main>

            <Footer />
        </div>

    </Router>
  );
}

export default App;
