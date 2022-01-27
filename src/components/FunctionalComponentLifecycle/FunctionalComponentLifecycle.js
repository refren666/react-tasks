import React, {useEffect, useState} from 'react';

const FunctionalComponentLifecycle = () => {
  // 1) CONSTRUCTOR
  console.log('constructor')
  const [count, setCount] = useState(0);

  // 3) componentDidMount
  // 5) componentWillUnmount
  useEffect(() => {
    // mount
    console.log('component did mount')
    // unmount
    return () => {
      console.log('component will unmount')
    }
  }, [])

  // 4) componentDidUpdate
  useEffect(() => {
    console.log('component did update')
  }, [count])

  return (
    <div>
      {/*2) RENDER*/}
      {console.log('render')}
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
};

export default FunctionalComponentLifecycle;