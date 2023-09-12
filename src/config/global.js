import {toast } from "react-toastify";
 window.notify = (msg,type)=>{
const option = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
    switch (type) {
        case 'error':
            toast.error(msg,option)
            break;
            case 'success':
                toast.success(msg,option)
    break;
    case 'info':
        toast.info(msg,option)
break;
case 'warning':
    toast.warn(msg,option)
    break;
        default:
            toast(msg,option)
    }
}