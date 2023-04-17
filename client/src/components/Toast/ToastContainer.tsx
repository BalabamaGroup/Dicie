import { Slide, ToastContainer as DefaultToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';

const ToastContainer = styled(DefaultToastContainer).attrs({
  position: 'top-right',
  autoClose: 2000,
  transition: Slide,
  newestOnTop: true,
  closeOnClick: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  draggable: true,
})`
  width: 240px;

  @media ${mobileAndSmaller} {
    margin: 16px 32px;
    width: calc(100vw - 64px);
  }

  .Toastify__toast {
    user-select: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding: 16px 16px 22px 16px;
    margin-bottom: 16px;
    border-radius: 12px;
    background: ${({ theme }) => theme.toast.background};
    box-shadow: -8px 8px 16px ${({ theme }) => theme.toast.shadow};

    .Toastify__toast-body {
      padding: 0;
      font-size: 12px;
      line-height: 16px;
      font-family: 'Nunito';
      color: ${({ theme }) => theme.toast.color};
      font-weight: 530;

      .Toastify__toast-icon {
        margin-right: 16px;
        * {
          max-height: 24px;
          max-width: 24px;
        }
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
      border-radius: 256px;
      overflow: hidden;
    }
  }

  .Toastify__toast--success {
    .Toastify__toast-icon {
      circle {
        fill: ${({ theme }) => theme.toast.successCircle};
      }
    }
    .Toastify__progress-bar {
      background: ${({ theme }) => theme.toast.success};
    }
  }

  .Toastify__toast--warning {
    .Toastify__toast-icon {
      circle {
        fill: ${({ theme }) => theme.toast.warningCircle};
      }
    }
    .Toastify__progress-bar {
      background: ${({ theme }) => theme.toast.warning};
    }
  }

  .Toastify__toast--error {
    .Toastify__toast-icon {
      circle {
        fill: ${({ theme }) => theme.toast.errorCircle};
      }
    }
    .Toastify__progress-bar {
      background: ${({ theme }) => theme.toast.error};
    }
  }
`;

export default ToastContainer;
