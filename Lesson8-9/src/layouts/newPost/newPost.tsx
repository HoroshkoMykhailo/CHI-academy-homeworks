import React, { useEffect, useState } from "react";
import { Box} from "@mui/material";
import { NewPostForm } from "~/components/components";
import { AppRoute, DataStatus } from "~/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store/store";
import { createPost } from "~/store/slices/exhibitSlice";
import { showNotification } from "~/store/slices/notificationSlice";
import { useNavigate } from "react-router-dom";

const NewPost: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { dataStatus } = useSelector((state: RootState) => state.exhibit);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitCompleted, setIsSubmitCompleted] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values: { description: string; image: File | null }) => {
    if (values.image && values.description) {
      await dispatch(createPost({ description: values.description, image: values.image }));
      setIsSubmitCompleted(true);
    } else {
      dispatch(
        showNotification({
          message: "You must provide both image and description",
          severity: "error",
        })
      );
    }
  };

  useEffect(() => {
    if (isSubmitCompleted) {
      if (dataStatus === "fulfilled") {
        navigate(AppRoute.STRIPE);
      } else if (dataStatus === "rejected") {
        dispatch(
          showNotification({
            message: "Something went wrong",
            severity: "error",
          })
        );
      }
    }
  }, [dataStatus, isSubmitCompleted, dispatch, navigate]);


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <NewPostForm
        imageUrl={imageUrl}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

export { NewPost }