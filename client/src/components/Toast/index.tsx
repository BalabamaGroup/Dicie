import { ReactSVG } from 'react-svg';
import { toast as defaultToast } from 'react-toastify';

export const Toast = {
  success: (data: any) =>
    defaultToast.success(data, {
      icon: () => {
        return <ReactSVG src='/images/svgs/toast-icons/toast.success.svg' />;
      },
    }),

  warning: (data: any) =>
    defaultToast.warning(data, {
      icon: () => {
        return <ReactSVG src='/images/svgs/toast-icons/toast.warning.svg' />;
      },
    }),

  error: (data: any) =>
    defaultToast.error(data, {
      icon: () => {
        return <ReactSVG src='/images/svgs/toast-icons/toast.error.svg' />;
      },
    }),
};

export default Toast;
