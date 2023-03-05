import { createAction } from "@reduxjs/toolkit";
import { Member } from "../models/member.model";
import { membersActions } from "./members.actions";

export const readAllCreator = createAction<Member[]>(membersActions.readAll);
export const readOneCreator = createAction<Member[]>(membersActions.readOne);
export const updateCreator = createAction<Partial<Member>>(
  membersActions.update
);
export const createCreator = createAction<Member>(membersActions.create);
export const deleteCreator = createAction<Member["id"]>(membersActions.delete);
export const logUserCreator = createAction<Member>(membersActions.logUser);
