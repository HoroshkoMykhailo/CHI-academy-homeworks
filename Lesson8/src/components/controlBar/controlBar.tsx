import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { AppRoute, HeaderHeight } from '~/constants/constants';
import './controlBar.css';
import { CustomButton } from '~/components/components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '~/store/slices/userSlice';
import { AppDispatch } from '~/store/store';

interface ControlBarProps {
  isAuthenticated: boolean;
  myPosts?: boolean;
}

const ControlBar: React.FC<ControlBarProps> = ({
  isAuthenticated,
  myPosts=false
}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const onLogout = () => {
    dispatch(logout());
    navigate(AppRoute.LOGIN);
  }

  const handleLogin = () => {
    navigate(AppRoute.LOGIN);
  };

  const handleNewPost = () => {
    navigate(AppRoute.NEW_POST);
  };

  const handleMyPosts = () => {
    myPosts ? navigate(AppRoute.STRIPE) : navigate(AppRoute.HOME);
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
              {myPosts ? 'To Stripe' : 'My Posts'}
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