import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchExhibits, fetchExhibitById, Exhibit } from '~/api/exhibitActions';
import { DataStatus } from '~/constants/constants';
import { type ValueOf } from '~/utils/utils';

export const getExhibits = createAsyncThunk('exhibits/getAll', async () => {
  return await fetchExhibits();
});

export const getExhibitById = createAsyncThunk('exhibits/getById', async (id: number) => {
  return await fetchExhibitById(id);
});

interface ExhibitsState {
  exhibits: Exhibit[];
  dataStatus: ValueOf<typeof DataStatus>;
}

const initialState: ExhibitsState = {
  exhibits: [],
  dataStatus: DataStatus.IDLE,
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
        (state, action: PayloadAction<Exhibit[]>) => {
          state.dataStatus = DataStatus.FULFILLED;
          state.exhibits = action.payload;
        }
      )
      .addCase(getExhibits.rejected, (state) => {
        state.dataStatus= DataStatus.REJECTED;
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