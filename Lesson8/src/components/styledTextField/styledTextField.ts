import { styled, TextField } from "@mui/material";
import { Colors } from "~/constants/constants";

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: "#F7EDF0",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Colors.textPrimary,
      },
      "&:hover fieldset": {
        borderColor: Colors.textPrimary,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2E7D32",
      },
    },
    "& .MuiInputLabel-root": {
      color: Colors.textPrimary,
      "&.Mui-focused": {
        color: 'black',
      },
    },
}));

export { StyledTextField }