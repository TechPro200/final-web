import './css/styles.css' ; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Login from "./paginas/Login";
import CreatePost from "./paginas/CrearPost";
import Navbar from "./componentes/Navbar";
import Registrar from './paginas/Registro';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registrar />} />
        <Route path="/crear" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
