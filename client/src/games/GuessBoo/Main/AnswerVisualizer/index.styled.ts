import styled, { css } from 'styled-components';

export const NoQuestion = styled.div`
  height: 32px;
  min-height: 32px;
  width: 100%;
`;

export const AnswerVisualizer = styled.div<{}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
`;

export const Bar = styled.div<{
  isFirst: boolean;
  isLast: boolean;
  width: number;
}>`
  width: 100px;
  height: 32px;
  background: #6de36b;

  width: ${({ width }) => `${width}%`};

  ${({ isFirst }) =>
    isFirst
      ? css`
          border-top-left-radius: 32px;
          border-bottom-left-radius: 32px;
        `
      : css`
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        `}
  ${({ isLast, width }) =>
    isLast
      ? css`
          ${width && `margin-right: 0px;`}
          border-top-right-radius: 32px;
          border-bottom-right-radius: 32px;
        `
      : css`
          ${width && `margin-right: 6px;`}
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        `};
`;

export const YesBar = styled(Bar)`
  background: #6de36b;
`;

export const NoBar = styled(Bar)`
  background: #fc3057;
`;

export const WtfBar = styled(Bar)`
  background: #ffa84b;
`;

export const EmptyBar = styled(Bar)`
  background: #fff;
`;
