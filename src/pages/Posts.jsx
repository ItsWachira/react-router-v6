import React from 'react';
import { Outlet } from 'react-router-dom';

const BlogPosts = {
  'first': {
    title: "First Post",
    name: "John Doe",
  },
  'second': {
    title: "Second Post",
    name: "Steve Smith",
  }
};

function Post() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title, name }]) => (
        <li key={slug}>
          <h3>{title}</h3>
          <p>By {name}</p>

        </li>
      ))}
    </ul>
  );
}

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

export {Post, Posts };