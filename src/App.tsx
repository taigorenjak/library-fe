import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Books from "./components/Books";
import Reviews from "./components/Reviews";

function App() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:id/reviews" element={<Reviews />} />
                </Routes>
            </div>
        </>
    );
}

export default App;