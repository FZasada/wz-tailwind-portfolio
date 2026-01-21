import { useState, useEffect } from 'react';

/**
 * Custom hook for handling image loading states
 * @param {string} src - The image source URL
 * @returns {object} - Object containing loading state and error state
 */
const useImageLoader = (src) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);

    const img = new Image();
    
    img.onload = () => {
      setLoading(false);
    };
    
    img.onerror = () => {
      setLoading(false);
      setError(true);
    };
    
    img.src = src;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { loading, error };
};

export default useImageLoader;
