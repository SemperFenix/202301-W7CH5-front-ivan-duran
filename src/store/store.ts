import { configureStore } from "@reduxjs/toolkit";
import { membersReducer } from "../reducer/members.reducer";

export const store = configureStore({
  reducer: {
    members: membersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
