import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import CreatePost from "./paginas/CrearPost";
import Navbar from "./componentes/Navbar";
import Registrar from './paginas/Registro';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registrar />} />
          <Route path="/crear" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
