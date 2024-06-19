import { ReactNode, createContext, useState } from 'react';

// export const INITIAL_STATE = {};
type userContentTyps = {
  theme: string;
  toggleTheme: () => void;
}

type userContentProps = {
  children: ReactNode;
}

const initialValue = {
  theme: 'light',
  toggleTheme: () => {
    return;
  }
};


export const ThemeContext = createContext<userContentTyps>(initialValue);




export const ThemeProvider = ({ children }: userContentProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');

  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};