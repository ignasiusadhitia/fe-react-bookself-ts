import Swal from "sweetalert2";

const ConfirmationDialog = async ({
  icon = "warning",
  title = "Are you sure?",
  text = "",
  confirmButtonText = "Yes",
  cancelButtonText = "Cancel",
}: {
  icon?: "warning" | "error" | "info" | "success";
  title: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}) => {
  return await Swal.fire({
    icon,
    title,
    text,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
  });
};

export default ConfirmationDialog;
