import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRoute } from "~/constants/constants";
import { showNotification } from "~/store/slices/notificationSlice"; 
import { AppDispatch } from "~/store/store";
import { socket } from "~/utils/socket"; 

export const useNewPostNotification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleNewPost = () => {
      dispatch(
        showNotification({
          message: "New post added",
          severity: "info",
        })
      );
      if (pathname === AppRoute.STRIPE && (searchParams.get("page") === "1" || !searchParams.has("page"))) {
        router.push(AppRoute.STRIPE);
      }
    };

    socket.on("newPost", handleNewPost);

    return () => {
      socket.off("newPost", handleNewPost);
    };
  }, [dispatch]);
};