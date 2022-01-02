import { createContext, useState, useEffect } from 'react';

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windowIsWide, setWindowIsWide] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) {
        setWindowIsWide(true);
      } else {
        setWindowIsWide(false);
      }
    });
    return () => {
      window.removeEventListener('resize');
    };
  }, []);

  return (
    <WindowContext.Provider value={{ windowIsWide }}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContext;
