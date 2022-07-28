import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    ime: "",
    dob: "0",
  },
  reducers: {
    postaviIme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ime = action.payload;
    },
    postaviDob: (state, action) => {
      state.dob = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { postaviIme, postaviDob } = userSlice.actions;

export default userSlice.reducer;
