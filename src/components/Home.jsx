/* import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);
  return (
    <div className='text-center container-sm w-50 '>
      <h1 className='my-2'>Home page</h1>
      {posts?.map((post) => (
        <Link
          className='btn btn-sm btn-outline-dark'
          to={`/contact/${post.id}`}
          key={post.id}
        >
          {post.id}
        </Link>
      ))}
    </div>
  );
};

export default Home;
 */

import React, { useEffect } from 'react';
import Arudathi from '../Assets/arundati.jpg';

const Home = ({ setName }) => {
  useEffect(() => {
    setName('Home');
  }, []);
  return (
    <div>
      <img
        loading='lazy'
        src={Arudathi}
        alt='arudathi'
        width={'100%'}
        height={'100%'}
      />
    </div>
  );
};

export default Home;
