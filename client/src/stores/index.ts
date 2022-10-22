import { UserStore } from "./UserStore";
import { AuthStore } from "./AuthStore";

const authStore = new AuthStore();
const userStore = new UserStore();

const store = {
  userStore,
  authStore,
};

export default store;
