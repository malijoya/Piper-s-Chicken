import { createContext } from 'react';

export interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);
