import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">FakeBook</Link>

            <div className="nav-actions">
                {!user ? (
                    <>
                        <Link to="/login" className="btn-nav-light">Iniciar sesión</Link>
                        <Link to="/registro" className="btn-nav-border">Registrarse</Link>
                    </>
                ) : (
                    <div className="user-menu">
                        <button onClick={() => setOpen(!open)} className="avatar"> {user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
                        </button>{open && (<div className="dropdown"> <button onClick={() => {
                            logout(); navigate('/');
                        }} className="dropdown-item">Cerrar sesión</button>
                        </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
