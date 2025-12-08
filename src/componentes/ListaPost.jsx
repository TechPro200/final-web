import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Post from './Post';

export default function ListaPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setPosts(data);
    });
    return () => unsub();
  }, []);

  return (
    <div className="container">
      {posts.length === 0 ? (
        <div className="text-center">No hay publicaciones aún.</div>
      ) : (
        posts.map(p => <Post key={p.id} post={p} />)
      )}
    </div>
  );
}
