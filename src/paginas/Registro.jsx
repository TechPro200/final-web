import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';


export default function Registrar() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(cred.user, { displayName: `${nombre} ${apellido}` });
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="form-box">
            <h2 className="page-title">Registro</h2>
            <form onSubmit={handleSubmit}>
                <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre"/>
                <input value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Apellido"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Contraseña"/>
                {error && <div>{error}</div>}
                <button>Crear cuenta</button>
            </form>
        </div>
    );
}