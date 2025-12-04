import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function Navbar() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    return (
        <nav className="w-full bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-4">
                <Link to="/" className="font-bold text-lg">Muro Interactivo</Link>
            </div>


            <div className="relative">
                {!user ? (
                    <div className="flex gap-2">
                        <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded-md">Iniciar sesión</Link>
                        <Link to="/registro" className="border border-white px-3 py-1 rounded-md">Registrarse</Link>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-10 h-10 rounded-full bg-white text-blue-600 font-bold flex items-center justify-center"
                        >
                            {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </button>


                        {open && (
                            <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-md shadow-md overflow-hidden">
                                <button
                                    onClick={() => { logout(); navigate('/'); }}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Cerrar sesión
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </nav>
    )};