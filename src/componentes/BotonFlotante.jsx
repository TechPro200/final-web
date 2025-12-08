import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function BotonFlotante() {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) return null;

    return (
        <button onClick={() => navigate('/crear')} className="btn-flotante"> + </button>
    );
}
