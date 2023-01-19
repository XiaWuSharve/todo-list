import { vm } from "../main.js";

let origin = null;

export default {
  setListener() {
    window.onmessage = function (e) {
      if (!origin) origin = e.origin;
      const { action, param } = e.data;
      if (action === "connect") return;
      else if (action === "checkAll") vm.$emit("check-all");
    };
  },
  postMessage(action, param) {
    window.postMessage({ action, param }, origin);
  },
};
