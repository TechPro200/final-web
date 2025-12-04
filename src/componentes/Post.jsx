import React from "react";

export default function Post({ post }) {
  return (
    <div className="post-card">
      <h3>{post.autor}</h3>
      <p>{post.contenido}</p>
      <small>{post.fecha}</small>
    </div>
  );
}
