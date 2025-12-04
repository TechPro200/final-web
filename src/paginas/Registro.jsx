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
        <div className="p-4 max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Registro</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" className="w-full p-2 border rounded" />
                <input value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Apellido" className="w-full p-2 border rounded" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" className="w-full p-2 border rounded" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Contraseña" className="w-full p-2 border rounded" />
                {error && <div className="text-red-500">{error}</div>}
                <button className="w-full bg-blue-600 text-white py-2 rounded">Crear cuenta</button>
            </form>
        </div>
    );
}