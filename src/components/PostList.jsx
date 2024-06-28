import React from 'react';
import Hoc2 from '../HOC/Hoc2';

const PostList = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hoc2(PostList, 'https://jsonplaceholder.typicode.com/posts');
