import styled from 'styled-components';

export const InlineDots = styled.div<{}>`
  @keyframes dots-1 {
    from {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
  }
  @keyframes dots-2 {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes dots-3 {
    from {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
  }
  @-webkit-keyframes dots-1 {
    from {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
  }
  @-webkit-keyframes dots-2 {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @-webkit-keyframes dots-3 {
    from {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
  }

  .dots span {
    animation: dots-1 1s infinite steps(1);
    -webkit-animation: dots-1 1.5s infinite steps(1);
  }

  .dots span:first-child + span {
    animation-name: dots-2;
    -webkit-animation-name: dots-2;
  }

  .dots span:first-child + span + span {
    animation-name: dots-3;
    -webkit-animation-name: dots-3;
  }
`;
