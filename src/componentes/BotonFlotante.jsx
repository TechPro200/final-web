import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function BotonFlotante() {
    const { user } = useAuth();
    const navigate = useNavigate();
    if (!user) return null;


    return (
        <button
            onClick={() => navigate('/crear')}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-xl text-3xl flex items-center justify-center"
        >
            +
        </button>
    )};