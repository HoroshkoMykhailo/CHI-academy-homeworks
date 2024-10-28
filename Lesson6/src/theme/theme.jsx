import { createTheme } from '@mui/material/styles';

export const getTheme = (isDarkMode) => 
  createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    components: {
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? '#121212' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: isDarkMode ? '#888' : '#ccc',
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: isDarkMode ? '#555' : '#999',
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: isDarkMode ? '#2e2e2e' : '#f0f0f0',
          },
        },
      },
    },
  });