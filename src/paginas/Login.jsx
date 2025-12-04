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
        <div className="p-4 max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input  type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" className="w-full p-2 border rounded" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Contraseña" className="w-full p-2 border rounded" />
                {error && <div className="text-red-500">{error}</div>}
                <button className="w-full bg-blue-600 text-white py-2 rounded">Entrar</button>
            </form>
            <div className="mt-4 text-sm">¿No tienes cuenta? <Link to="/registro" className="text-blue-600">Regístrate</Link></div>
        </div>
    );
}