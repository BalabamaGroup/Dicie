import styled, { css } from 'styled-components';

export const BouncingDots = styled.div<{ size: number }>`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--vh100);
  }

  .bouncing-loader {
    display: flex;
    justify-content: center;
    margin: ${({ size }) => `${(size / 3) * 2}px`} auto 0;
  }

  .bouncing-loader > div {
    width: ${({ size }) => `${size / 3}px`};
    height: ${({ size }) => `${size / 3}px`};
    margin: 0 2px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 1;
    animation: bouncing-loader 0.75s infinite alternate;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 1;
      transform: ${({ size }) => `translateY(-${size / 3}px)`};
    }
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.25s;
  }

  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.5s;
  }
`;
