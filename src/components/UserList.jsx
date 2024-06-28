import React from 'react';
import Hoc2 from '../HOC/Hoc2';

const UserList = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hoc2(UserList, 'https://jsonplaceholder.typicode.com/users');
