import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);
  const { id } = useParams();
  return (
    <div className="container mt-5">
      {posts?.map((post) =>
        id == post.id ? (
          <div className="card shadow-lg" key={post.id}>
            <h1 className="card-header bg-primary text-white">{post.id}</h1>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default BlogPost;