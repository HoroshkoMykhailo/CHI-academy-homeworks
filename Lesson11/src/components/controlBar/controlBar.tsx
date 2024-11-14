'use client';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { AppRoute, Colors, HeaderHeight } from '~/constants/constants';
import './controlBar.css';
import { CustomButton } from '~/components/components';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '~/store/slices/userSlice';
import { AppDispatch, RootState } from '~/store/store';
import { useNewPostNotification } from '~/hooks/hooks';

interface ControlBarProps {
  myPosts?: boolean;
}

const ControlBar: React.FC<ControlBarProps> = ({ myPosts = false }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useNewPostNotification();
  
  const onLogout = () => {
    dispatch(logout());
    router.push(AppRoute.LOGIN);
  };

  const handleLogin = () => {
    router.push(AppRoute.LOGIN);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: Colors.backgroundPrimary, height: HeaderHeight }}
    >
      <Toolbar>
        <Box className="controlContainer">
          {isAuthenticated && isMounted ? (
            <>
              <CustomButton width={120} onClick={onLogout}>
                Logout
              </CustomButton>
              <CustomButton
                width={220}
                link={myPosts ? AppRoute.STRIPE : AppRoute.HOME}
              >
                {myPosts ? "To Stripe" : "My Posts"}
              </CustomButton>
              <CustomButton
                width={120}
                fontSize={"2rem"}
                link={AppRoute.NEW_POST}
              >
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