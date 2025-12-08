import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (err) {
            console.log("ERROR LOGIN:", err.code, err.message);
            setError(err.message);
        }
    }

    return (
        <div className="form-box">
            <h2 className="page-title">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <input  type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Contraseña"/>
                {error && <div>{error}</div>}
                <button>Entrar</button>
            </form>
            <div>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></div>
        </div>
    );
}