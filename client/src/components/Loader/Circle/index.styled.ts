import styled from 'styled-components';

export const CircleLoader = styled.div<{}>`
  margin-top: 82px;
  transform: scale(0.9142857143);

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes grow {
    0%,
    15%,
    100% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.2);
    }
  }

  .wrapper {
    position: relative;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    margin: 5em auto 0;
    filter: url('#goo');
  }

  .wrapper > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    margin: -1.5rem;
  }

  .wrapper > *:nth-of-type(1) {
    transform: rotate(0deg) translate(7rem) rotate(0deg);
  }

  .wrapper > *:nth-of-type(1) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: -0.1s;
  }

  .wrapper > *:nth-of-type(2) {
    transform: rotate(45deg) translate(7rem) rotate(-45deg);
  }

  .wrapper > *:nth-of-type(2) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 0.4s;
  }

  .wrapper > *:nth-of-type(3) {
    transform: rotate(90deg) translate(7rem) rotate(-90deg);
  }

  .wrapper > *:nth-of-type(3) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 0.9s;
  }

  .wrapper > *:nth-of-type(4) {
    transform: rotate(135deg) translate(7rem) rotate(-135deg);
  }

  .wrapper > *:nth-of-type(4) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 1.4s;
  }

  .wrapper > *:nth-of-type(5) {
    transform: rotate(180deg) translate(7rem) rotate(-180deg);
  }

  .wrapper > *:nth-of-type(5) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 1.9s;
  }

  .wrapper > *:nth-of-type(6) {
    transform: rotate(225deg) translate(7rem) rotate(-225deg);
  }

  .wrapper > *:nth-of-type(6) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 2.4s;
  }

  .wrapper > *:nth-of-type(7) {
    transform: rotate(270deg) translate(7rem) rotate(-270deg);
  }

  .wrapper > *:nth-of-type(7) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 2.9s;
  }

  .wrapper > *:nth-of-type(8) {
    transform: rotate(315deg) translate(7rem) rotate(-315deg);
  }

  .wrapper > *:nth-of-type(8) > .bubble {
    animation: grow 4s ease infinite;
    animation-delay: 3.4s;
  }

  .bubble-wrapper {
    max-width: 100%;
  }

  .bubble-wrapper .bubble {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #d0f485;
  }

  .main-bubble-wrapper {
    animation: spin 4s linear infinite;
  }

  .main-bubble-wrapper .main-bubble {
    width: 2.25em;
    height: 2.25em;
    background: #e7ffb4;
    border-radius: 50%;
    margin-left: 7.375em;
    box-shadow: 0px 0px 50px -4px white;
  }
`;
