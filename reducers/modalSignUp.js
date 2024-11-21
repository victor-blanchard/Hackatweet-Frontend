import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const isModalOpenSlice = createSlice({
  name: "isModalOpen",
  initialState,
  reducers: {
    modalSignUp: (state) => {
      state.value=true;
    },
    
  },
});

export const { isModalOpen } =
isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
