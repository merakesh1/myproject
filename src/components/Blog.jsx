import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Arundathi from '../Assets/mmm-randi-randira-arundati.gif';

const Blog = ({ setName }) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    setName('Blog');
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <div style={{ position: 'relative' }}>
        <nav
          className='text-center container-sm w-50 mt-5'
          style={{
            border: '1px solid black',
            padding: '20px',
            textAlign: 'justify',
            backgroundImage: `url(${Arundathi})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
          }}
        >
          {posts?.map((post) => (
            <Link
              key={post.id}
              className='btn btn-sm btn-outline-dark m-1'
              to={`${post.id}`}
            >
              Blog-{post.id}
            </Link>
          ))}
        </nav>
      </div>
      <hr />
      <div className='text-center container-sm w-50'>
        <h1 className='my-2'>Blog Page</h1>
        <h4>Blogs are displayed here..</h4>
        <Outlet />
      </div>
    </>
  );
};

export default Blog;