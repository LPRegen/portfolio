import '../styles/globals.css';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { BlocksWave } from 'react-svg-spinners';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      handleLoading();
    } else {
      window.addEventListener('load', handleLoading);
    }
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  return (
    <>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <div className="grid">
          <BlocksWave />
        </div>
      )}
    </>
  );
}

export default MyApp;
