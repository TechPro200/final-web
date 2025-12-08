import React from "react";

export default function Post({ post }) {
  const fechaTexto = post.fecha?.toDate ? post.fecha.toDate().toLocaleString() : (post.fecha || '');
  return (
    <div className="post">
      <h3>{post.titulo || post.autor}</h3>
      <p>{post.contenido}</p>
      <small>{fechaTexto}</small>a
      <div>Publicado por: {post.autor || 'Anónimo'}</div>

    </div>
  );
}
