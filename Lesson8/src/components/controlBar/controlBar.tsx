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

  const handleMyPosts = () => {
    navigate(AppRoute.HOME);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#5DD39E', height: HeaderHeight }}>
      <Toolbar>
        <Box className="controlContainer">
        {isAuthenticated ? (
          <>
            <CustomButton width={120} onClick={onLogout}>
              Logout
            </CustomButton >
            <CustomButton width={220} onClick={handleMyPosts}>
              My posts
            </CustomButton>
            <CustomButton width={120} onClick={handleNewPost} fontSize={"2rem"}>
              +
            </CustomButton>
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