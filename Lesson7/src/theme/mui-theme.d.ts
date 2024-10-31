import '@mui/material/styles';
import { Components } from '@mui/material/styles/createComponents';

declare module '@mui/material/styles' {
  interface Components {
    MuiDataGrid?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
  }
}