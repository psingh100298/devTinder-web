import { useEffect } from "react";
import useToastStore from "../utils/toastStore";

const Toast = () => {
  const toast = useToastStore((store) => store.toast);
  const hideToast = useToastStore((store) => store.hideToast);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => hideToast(), 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToast]);

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
