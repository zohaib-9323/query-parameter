import React, { createContext, useState, ReactNode } from 'react';

type TextContextType = {
  text: string;
  setText: (text: string) => void;
};

export const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>(''); 

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
