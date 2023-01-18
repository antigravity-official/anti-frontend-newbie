import React, { useState, useEffect } from 'react';
import Loader from './user_interface/components/Loader';
import Main from './user_interface/view/Main';

export const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  return <>{loading ? <Loader /> : <Main />}</>;
};

export default App;
