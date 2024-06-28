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
    <div>
      {posts?.map((post) =>
        id == post.id ? (
          <div className='text-center card' key={post.id}>
            <h1 className='card-header'>{post.id}</h1>
            <div className='card-body'>
              <p className='card-text'>{post.title}</p>
              <p className='card-text'>{post.body}</p>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default BlogPost;
