import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExhibits } from "~/store/slices/exhibitsSlice";
import { showNotification } from "~/store/slices/notificationSlice"; 
import { AppDispatch } from "~/store/store";
import { socket } from "~/utils/socket"; 

export const useNewPostNotification = (
    page?: number,
    limit?: number
  ) => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      const handleNewPost = () => {
        dispatch(
          showNotification({
            message: "New post added",
            severity: "info",
          })
        )
        if ( page && limit && page === 1) {
          dispatch(getExhibits({ page, limit }));
        }
      };
  
      socket.on("newPost", handleNewPost);
  
      return () => {
        socket.off("newPost", handleNewPost);
      };
    }, [dispatch, page, limit]);
  };