import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    ime: "",
    password: "",
    logiran: false,
  },
  reducers: {
    postaviIme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ime = action.payload;
    },
    postaviPassword: (state, action) => {
      state.password = action.payload;
    },
    logirajSe: (state, action) => {
      if (action.payload === "login") {
        state.logiran = true;
      } else {
        state = {
          ime: "",
          password: "",
          logiran: false,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { postaviIme, postaviPassword, logirajSe } = userSlice.actions;

export default userSlice.reducer;
