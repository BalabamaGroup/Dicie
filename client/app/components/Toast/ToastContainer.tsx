import styled from "styled-components";
import { ToastContainer as DefaultToastContainer, Slide } from "react-toastify";
import { mobileAndSmaller } from "../../common/utils/device";

const ToastContainer = styled(DefaultToastContainer).attrs({
  position: "top-right",
  autoClose: 2000,
  transition: Slide,
  newestOnTop: true,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  draggable: true,
})`
  width: 340px;
  @media ${mobileAndSmaller} {
    margin: 8px 32px;
    width: calc(100vw - 64px);
  }

  .Toastify__toast {
    user-select: none;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 16px 16px 18px;
    gap: 16px;
    margin-bottom: 8px;
    border-radius: 16px;

    .Toastify__toast-body {
      padding: 0;
      color: #666666;
      font-family: "Inter";
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;

      .Toastify__toast-icon {
        margin-right: 16px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }

    .Toastify__close-button {
      display: none;
    }

    .Toastify__progress-bar {
      height: 5px;
      bottom: 5px;
      left: 16px;
      width: calc(100% - 32px);
      border-radius: 4px;
    }
  }

  .Toastify__toast--success {
    box-shadow: 0px 8px 16px rgba(109, 227, 107, 0.25);
    .Toastify__toast-icon svg * {
      fill: #6de36b;
    }
    .Toastify__progress-bar {
      background: #6de36b;
    }
  }

  .Toastify__toast--warning {
    box-shadow: 0px 8px 16px rgba(227, 208, 107, 0.25);
    .Toastify__toast-icon svg * {
      fill: #e3d06b;
    }
    .Toastify__progress-bar {
      background: #e3d06b;
    }
  }

  .Toastify__toast--error {
    box-shadow: 0px 8px 16px rgba(227, 107, 107, 0.25);

    .Toastify__toast-icon svg * {
      fill: #e36b6b;
    }
    .Toastify__progress-bar {
      background: #e36b6b;
    }
  }
`;

export default ToastContainer;
