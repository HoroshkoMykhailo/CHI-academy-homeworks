import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { StyledTextField } from "~/components/components";
import { AppRoute, Colors, DataStatus } from "~/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store/store";
import { createPost } from "~/store/slices/exhibitSlice";
import { showNotification } from "~/store/slices/notificationSlice";
import { useNavigate } from "react-router-dom";

const NewPost: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { dataStatus } = useSelector((state: RootState) => state.exhibit);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if(image && description) {
      await dispatch(createPost({ description, image }));
    }
    else if(!image) {
      dispatch(showNotification({
        message: "You must select an image",
        severity: "error",
      }));
    }
    else if(!description) {
      dispatch(showNotification({
        message: "You must enter a description",
        severity: "error",
      }));
    }
  };

  if(dataStatus === DataStatus.FULFILLED) {
    navigate(AppRoute.STRIPE);
  }
  else if(dataStatus === DataStatus.REJECTED) {
    dispatch(showNotification({
      message: "Something went wrong",
      severity: "error",
    }));
  }

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
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "400px",
          maxwidth: "1000px",
          maxHeight: "1000px",
          padding: 2,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "200px",
            border: "2px dashed",
            borderColor: Colors.buttonColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: 2,
            position: "relative",
          }}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Selected"
              style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
            />
          ) : (
            <Typography variant="body1" color="textSecondary">
              Click to select an image
            </Typography>
          )}
          <input
            id="file-input"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Box>

        <StyledTextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: Colors.buttonColor,
            color: Colors.textPrimary,
            "&:hover": {
              backgroundColor: "#A8D88C",
            },
          }}
          fullWidth
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export { NewPost }