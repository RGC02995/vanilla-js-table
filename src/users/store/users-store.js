import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);

  if (users.length === 0) return;
  state.currentPage += 1;
  state.users = users;
};

const loadPreviusPage = async () => {
  throw new Error("No implementado");
};

const onUserChange = async () => {
  throw new Error("No implementado");
};

export default {
  loadNextPage,
  loadPreviusPage,
  onUserChange,

  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
