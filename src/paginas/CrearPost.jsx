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
        if (!user) return setError('Debes iniciar sesión');

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
    };

    return (
        <div className="container">
            <div className="form-box">
                <h2 className="page-title">Crear Publicación</h2>
                <form onSubmit={handleSubmit} className="create-form">
                    <label>Título</label>
                    <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Escribir titulo"
                    />
                    <label>Contenido</label>
                    <textarea
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                    />
                    {error && <div className="error">{error}</div>}
                    <button type="submit">Publicar</button>
                </form>
            </div>
        </div>
    );
}
