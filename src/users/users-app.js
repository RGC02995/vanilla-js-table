import { renderButtons } from "./presentation/render-button/render-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { RenderAddButton } from "./presentation/render-table/render-add-button/render-add-button";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
  element.innerHTML = "";
  renderTable(element);
  renderButtons(element);
  RenderAddButton(element, () => console.log("desde el padre"));
  renderModal(element, async () => {
    const user = await saveUser(userLike);
    usersStore.onUserChange(user);
    renderTable();
  });
};
