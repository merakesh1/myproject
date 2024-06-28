import React, { useState, useEffect } from 'react';

const Hoc2 = (MyComponent, url) => {
  return function UpdatedComponent(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return (
      <MyComponent data={data} isLoading={isLoading} error={error} {...props} />
    );
  };
};

export default Hoc2;
