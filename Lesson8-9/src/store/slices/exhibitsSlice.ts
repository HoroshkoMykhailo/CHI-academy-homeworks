import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchExhibits,
} from "~/api/exhibitActions";
import { DataStatus } from "~/constants/constants";
import { Exhibit, ExhibitsResponse } from "~/types/types";
import { type ValueOf } from "~/utils/utils";

export const getExhibits = createAsyncThunk(
  "exhibits/getAll",
  async ({ page, limit, myPosts }: { page: number; limit: number, myPosts?: boolean }) => {
    return await fetchExhibits(page, limit, myPosts);
  }
);

interface ExhibitsState {
  exhibits: Exhibit[];
  dataStatus: ValueOf<typeof DataStatus>;
  total: number;
  page: number;
  lastPage: number;
}

const initialState: ExhibitsState = {
  exhibits: [],
  dataStatus: DataStatus.IDLE,
  total: 0,
  page: 1,
  lastPage: 1,
};

const exhibitsSlice = createSlice({
  name: "exhibits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExhibits.pending, (state) => {
        state.dataStatus = DataStatus.PENDING;
      })
      .addCase(
        getExhibits.fulfilled,
        (state, action: PayloadAction<ExhibitsResponse>) => {
          state.dataStatus = DataStatus.FULFILLED;
          state.exhibits = action.payload.data;
          state.total = action.payload.total;
          state.page = action.payload.page;
          state.lastPage = action.payload.lastPage;
        }
      )
      .addCase(getExhibits.rejected, (state) => {
        state.dataStatus = DataStatus.REJECTED;
      })
  },
});

export default exhibitsSlice.reducer;
