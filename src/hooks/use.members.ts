import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../reducer/members.actions.creator";
import { useEffect } from "react";
import { MembersRepo } from "../services/repository/members.repo";
import { Member } from "../models/member.model";

export function useMembers(repo: MembersRepo) {
  const members = useSelector((state: RootState) => state.members);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const readAllMembers = async () => {
      try {
        const data = await repo.readAll();
        dispatch(ac.readAllCreator(data.results));
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    readAllMembers();
  }, [dispatch, repo]);

  const readMember = async (id: string) => {
    try {
      const data = await repo.readOne(id);
      dispatch(ac.readOneCreator(data.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const createMember = async (info: Partial<Member>) => {
    try {
      const data = await repo.create(info, "register");
      dispatch(ac.createCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateMember = async (
    info: Partial<Member>,
    token: string,
    action: string
  ) => {
    try {
      const data = await repo.update(info, token, action);
      dispatch(ac.updateCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const deleteMember = async (id: string, token: string) => {
    try {
      await repo.delete(id, token);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const loginMember = async (info: Partial<Member>) => {
    try {
      const data = await repo.create(info, "login");
      dispatch(ac.logUserCreator(data.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    members,
    readMember,
    createMember,
    updateMember,
    deleteMember,
    loginMember,
  };
}
