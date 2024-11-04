import React from 'react';
import { AppBar, Toolbar, Button, TextField, Box } from '@mui/material';
import { AppRoute, HeaderHeight } from '~/constants/constants';
import './controlBar.css';
import { CustomButton } from '~/components/components';
import { useNavigate } from 'react-router-dom';

interface ControlBarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const ControlBar: React.FC<ControlBarProps> = ({
  isAuthenticated,
  onLogout,
}) => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(AppRoute.LOGIN);
  };

  const handleNewPost = () => {
    navigate(AppRoute.NEW_POST);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#5DD39E', height: HeaderHeight }}>
      <Toolbar>
        <Box className="controlContainer">
        {isAuthenticated ? (
          <>
            <CustomButton width={120} onClick={handleNewPost} fontSize={"2rem"}>
              +
            </CustomButton>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{
                width: '500px',
                backgroundColor: '#F7EDF0',
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#313638",
                  },
                  "&:hover fieldset": {
                    borderColor: "#313638",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#2E7D32",
                  },
                },
              }}
            />
            <CustomButton width={120} onClick={onLogout}>
              Logout
            </CustomButton >
          </>
        ) : (
          <CustomButton width={120} onClick={handleLogin}>
            Login
          </CustomButton>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { ControlBar };