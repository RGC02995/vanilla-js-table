import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
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

  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
