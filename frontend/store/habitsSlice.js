import { createSlice } from '@reduxjs/toolkit';

const habitsSlice = createSlice({
  name: 'habits',
  initialState: {
    list: [],
  },
  reducers: {
    setHabits: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setHabits } = habitsSlice.actions;
export default habitsSlice.reducer;
