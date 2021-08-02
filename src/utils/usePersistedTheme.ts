import { useState, useEffect } from 'react';

interface InitialStateProps {
  title: string;
  
  colors: {
    background: string;
    boxHover: string;
    button: string;
    primary: string;
    shape: string;
    text: string;
  }
}

export function usePersistedTheme(key: string, initialState: InitialStateProps) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
}