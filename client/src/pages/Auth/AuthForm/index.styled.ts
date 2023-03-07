import styled from 'styled-components';

import { mobileAndSmaller } from '@/common/utils/device';

export const AuthForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (max-width: 464px) {
    width: calc(100vw - 64px);
  }
`;

export const AuthHeader = styled.div`
  width: 100%;

  .main {
    font-weight: 800;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 16px;

    color: ${({ theme }) => theme.page.auth.headerMain};
    @media ${mobileAndSmaller} {
      margin-bottom: 0px;
    }

    .colored {
      color: ${({ theme }) => theme.page.auth.headerAccent};
    }
  }

  .subheader {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${({ theme }) => theme.page.auth.headerSub};

    @media ${mobileAndSmaller} {
      display: none;
    }
  }

  .subheader:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const MultiInputWrapper = styled.div<{ inputCount: number }>`
  height: ${({ inputCount }) => `${inputCount * 72}px`};
  width: 100%;
  position: relative;

  .auth_multiinput {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
