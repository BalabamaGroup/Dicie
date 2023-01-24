import styled from 'styled-components';

export const RadioExtended = styled.div<{}>`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const RadioExtendedOption = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  * {
    cursor: pointer;
  }

  .option-header {
    border-radius: 16px 16px 0 0;
    color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    height: 24px;
    width: 100%;
    background-color: #38373a;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    .radio-indicator-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      background-color: #201e1f;
      border-radius: 50%;

      .radio-indicator {
        ${({ isSelected }) => !isSelected && 'display: none'};
        width: 8px;
        height: 8px;
        background-color: yellow;
        border-radius: 50%;
      }
    }
  }

  .option-content {
    border-radius: 0 0 16px 16px;
    padding: 22px 0;
    box-sizing: border-box;
    background-color: #201e1f;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;
