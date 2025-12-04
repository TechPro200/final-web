import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function CreatePost() {
    const { user } = useAuth();
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if (!user) return setError('Debes iniciar sesión para publicar.');


        try {
            await addDoc(collection(db, 'posts'), {
                titulo,
                contenido,
                autor: user.displayName || user.email,
                uid: user.uid,
                fecha: serverTimestamp()
            });
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }


    return (
        <div className="p-4 max-w-xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Crear publicación</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" className="w-full p-2 border rounded" />
                <textarea value={contenido} onChange={e => setContenido(e.target.value)} placeholder="Contenido" className="w-full p-2 border rounded h-32" />
                {error && <div className="text-red-500">{error}</div>}
                <button className="w-full bg-blue-600 text-white py-2 rounded">Publicar</button>
            </form>
        </div>
    );
}