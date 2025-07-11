import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialUsers = [
  // optional seed data; or start with []
];

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(user) {
        return { payload: { id: nanoid(), ...user } };
      },
    },
    userUpdated(state, action) {
      const idx = state.findIndex((u) => u.id === action.payload.id);
      if (idx >= 0) state[idx] = action.payload;
    },
    userDeleted(state, action) {
      return state.filter((u) => u.id !== action.payload);
    },
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;
export default usersSlice.reducer;
