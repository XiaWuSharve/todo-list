import { vm } from "../main.js";

let origin = null;

export default {
  setListener() {
    window.addEventListener("message", function (e) {
      if (!origin) origin = e.origin;
      const { action, param } = e.data;
      console.log(action, param);
      if (action === "connect") return;
      else if (action === "checkAll") vm.$bus.$emit("check-all", true);
    });
  },
  postMessage(action, param) {
    console.log(action, param, "sub");
    window.postMessage({ action, param }, origin);
  },
};
