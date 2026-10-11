import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../utils/toastSlice";

const Toast = () => {
  const toast = useSelector((store) => store.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => dispatch(hideToast()), 3000);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);

  if (!toast) return null;

  return (
    <div className="toast toast-top toast-center">
      <div
        className={
          toast.type === "success" ? "alert alert-success" : "alert alert-error"
        }
      >
        <span>{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
