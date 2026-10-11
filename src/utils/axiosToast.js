import axios from "axios";
import appStore from "./appStore";
import { showToast } from "./toastSlice";

const TOAST_METHODS = ["post", "put", "patch"];

// backend sends either a plain string or an object with a message
const getMessage = (data, fallback) =>
  typeof data === "string" && data !== "" ? data : data?.message || fallback;

axios.interceptors.response.use(
  (res) => {
    if (TOAST_METHODS.includes(res.config.method)) {
      appStore.dispatch(
        showToast({ type: "success", message: getMessage(res.data, "Success") }),
      );
    }
    return res;
  },
  (err) => {
    if (TOAST_METHODS.includes(err.config?.method)) {
      appStore.dispatch(
        showToast({
          type: "error",
          message: getMessage(err.response?.data, "Something went wrong!"),
        }),
      );
    }
    return Promise.reject(err);
  },
);
