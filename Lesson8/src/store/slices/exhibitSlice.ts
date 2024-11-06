import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createExhibit, deleteExhibit, fetchExhibitById } from "~/api/exhibitActions";
import { DataStatus, HTTPCode } from "~/constants/constants";
import { ErrorResponse, Exhibit } from "~/types/types";
import { ValueOf } from "~/utils/utils";

export const getExhibitById = createAsyncThunk(
  "exhibits/getById",
  async (id: number) => {
    return await fetchExhibitById(id);
  }
);

export const createPost = createAsyncThunk(
  "exhibits/create",
  async ({ description, image }: { description: string; image: File }) => {
    return await createExhibit(description, image);
  }
);

export const deletePost = createAsyncThunk(
  "exhibits/delete",
  async (id: number) => {
    return await deleteExhibit(id);
  }
)

interface ExhibitState {
    exhibit: Exhibit | null;
    dataStatus: ValueOf<typeof DataStatus>;
}

const initialState: ExhibitState = {
    exhibit: null,
    dataStatus: DataStatus.IDLE,
};

const exhibitSlice = createSlice({
    name: "exhibit",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getExhibitById.pending, (state) => {
            state.dataStatus = DataStatus.PENDING;
          })
          .addCase(
            getExhibitById.fulfilled,
            (state, action: PayloadAction<Exhibit>) => {
              state.dataStatus = DataStatus.FULFILLED;
              state.exhibit = action.payload;
            }
          )
          .addCase(getExhibitById.rejected, (state) => {
            state.dataStatus = DataStatus.REJECTED;
          })
          .addCase(createPost.pending, (state) => {
            state.dataStatus = DataStatus.PENDING;
          })
          .addCase(
            createPost.fulfilled,
            (state, action: PayloadAction<Exhibit | ErrorResponse>) => {
              if ('status' in action.payload && action.payload.status === HTTPCode.BAD_REQUEST) {
                state.dataStatus = DataStatus.REJECTED;
              }
              else{
                state.dataStatus = DataStatus.FULFILLED;
              }
            }
          )
          .addCase(createPost.rejected, (state) => {
            state.dataStatus = DataStatus.REJECTED;
          })
          .addCase(deletePost.pending, (state) => {
            state.dataStatus = DataStatus.PENDING;
          })
          .addCase(
            deletePost.fulfilled,
            (state, action: PayloadAction<Exhibit>) => {
              state.dataStatus = DataStatus.FULFILLED;
              state.exhibit = action.payload;
            }
          )
          .addCase(deletePost.rejected, (state) => {
            state.dataStatus = DataStatus.REJECTED;
          });
    },
});

export default exhibitSlice.reducer;