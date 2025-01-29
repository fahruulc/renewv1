// utils/myToast.js
import { toast } from "react-hot-toast";

export const showSuccessNotification = (message) => {
  toast.success(message, {
    style: {
      background: "#123524", // Gelap
      color: "#fff", // Warna teks putih
    },
  });
};

export const showErrorNotification = (message) => {
  toast.error(message, {
    style: {
      background: "#22092C", // Warna merah untuk error
      color: "#fff",
    },
  });
};

export const showLoadingNotification = (message) => {
  toast.loading(message, {
    style: {
      background: "#441752", // Gelap
      color: "#fff",
    },
  });
};
