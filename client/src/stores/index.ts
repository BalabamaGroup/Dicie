import { UserStore } from "./UserStore";
import { AuthStore } from "./AuthStore";

const userStore = new UserStore();
const authStore = new AuthStore();

const store = {
  userStore,
  authStore,
};

export default store;
