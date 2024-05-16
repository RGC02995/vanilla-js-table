import { User } from "../models/user";

export const saveUser = async (userLike) => {
  const user = new User(userLike);

  //Aqui falta un mapper

  if (user.id) {
    throw "No implementada la actualización";
    return;
  }

  const updateUser = await createUser(user);
  return updateUser;
};

const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newUserData = await res.json();
  console.log({ newUserData });
  return newUserData;
};
