import Swal from "sweetalert2";

const Toast = ({
  icon = "success",
  title = "Operation completed successfully",
  position = "top-end",
  timer = 3000,
}: {
  icon?: "success" | "error" | "warning" | "info";
  title?: string;
  position?: "top-end" | "top-start" | "bottom-end" | "bottom-start";
  timer?: number;
}) => {
  Swal.fire({
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    icon,
    title,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

export default Toast;
