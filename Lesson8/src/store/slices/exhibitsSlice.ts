import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchExhibits, fetchExhibitById, fetchMyExhibits } from '~/api/exhibitActions';
import { DataStatus } from '~/constants/constants';
import { Exhibit, ExhibitsResponse } from '~/types/types';
import { type ValueOf } from '~/utils/utils';

export const getExhibits = createAsyncThunk('exhibits/getAll', async ({page, limit}: {page: number, limit: number}) => {
  return await fetchExhibits(page, limit);
});

export const getExhibitById = createAsyncThunk('exhibits/getById', async (id: number) => {
  return await fetchExhibitById(id);
});

export const getMyExhibits = createAsyncThunk('exhibits/getMyExhibits', async ({page, limit}: {page: number, limit: number}) => {
  return await fetchMyExhibits(page, limit);
});

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
  lastPage: 1
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
        state.dataStatus= DataStatus.REJECTED;
      })
      .addCase(getMyExhibits.pending, (state) => {
        state.dataStatus = DataStatus.PENDING;
      })
      .addCase(
        getMyExhibits.fulfilled,
        (state, action: PayloadAction<ExhibitsResponse>) => {
          state.dataStatus = DataStatus.FULFILLED;
          state.exhibits = action.payload.data;
          state.total = action.payload.total;
          state.page = action.payload.page;
          state.lastPage = action.payload.lastPage;
        }
      )
      .addCase(getMyExhibits.rejected, (state) => {
        state.dataStatus = DataStatus.REJECTED;
      })
      .addCase(getExhibitById.pending, (state) => {
        state.dataStatus = DataStatus.PENDING;
      })
      .addCase(
        getExhibitById.fulfilled,
        (state, action: PayloadAction<Exhibit>) => {
          state.dataStatus = DataStatus.FULFILLED;
          state.exhibits = [action.payload];
        }
      )
      .addCase(getExhibitById.rejected, (state) => {
        state.dataStatus = DataStatus.REJECTED;
      });
  },
});

export default exhibitsSlice.reducer;