import { toast as defaultToast } from "react-toastify";
import { ReactSVG } from "react-svg";

export const Toast = {
  success: (data: any) =>
    defaultToast.success(data, {
      icon: () => {
        return <ReactSVG src="/svgs/check.exclude.svg" />;
      },
    }),

  warning: (data: any) =>
    defaultToast.warning(data, {
      icon: () => {
        return <ReactSVG src="/svgs/info.exclude.svg" />;
      },
    }),

  error: (data: any) =>
    defaultToast.error(data, {
      icon: () => {
        return <ReactSVG src="/svgs/warning.exclude.svg" />;
      },
    }),
};

export default Toast;
