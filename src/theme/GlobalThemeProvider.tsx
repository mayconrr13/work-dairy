import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { customTheme } from './customTheme';

export interface GlobalThemeProviderProps {
  children: ReactNode;
}

const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default GlobalThemeProvider;
