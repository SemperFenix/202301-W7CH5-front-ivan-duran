import { createReducer } from "@reduxjs/toolkit";
import { Member } from "../models/member.model";
import * as ac from "./members.actions.creator";

export type State = {
  loggedUser: Member;
  members: Member[];
};

const initialState: State = {
  members: [],
  loggedUser: {} as Member,
};

export const membersReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.readAllCreator, (state, { payload }) => {
    return { ...state, members: payload };
  });

  builder.addCase(ac.readOneCreator, (state, { payload }) => {
    return { ...state, members: payload };
  });

  builder.addCase(ac.updateCreator, (state, { payload }) => {
    const info = [...state.members];
    const data = info.map((item) =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
    return { ...state, members: data };
  });

  builder.addCase(ac.createCreator, (state, { payload }) => {
    return { ...state, members: [...state.members, payload] };
  });

  builder.addCase(ac.deleteCreator, (state, { payload }) => {
    const data = state.members.filter((item) => item.id !== payload);
    return { ...state, members: data };
  });

  builder.addCase(ac.logUserCreator, (state, { payload }) => {
    return { ...state, loggedUser: payload };
  });

  builder.addDefaultCase((state) => state);
});
