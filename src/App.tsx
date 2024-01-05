import React, { useEffect, useState } from 'react';
import './index.css';
import { CardContainer } from './components/CardContainer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false)
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <main className="container flexVertical">
      {loading ? 
      (
        <span>
            Loading...
        </span>
      ) 
        : 
      (
        <>
          <img className="logo" src={require("./assets/logorm.png")} alt="logo" />
          <CardContainer />
        </>
      )}
    </main>
  );
}

export default App;
