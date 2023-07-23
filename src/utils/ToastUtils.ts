import { toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
});

class ToastUtil {

    info = (message: string) => {
        toast.info(message, {
            transition: bounce,
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: true
        });
    };
    success = (message: string) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: true
        });
    };
    error = (message: string) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: true
        });
    };
}

export default new ToastUtil();
