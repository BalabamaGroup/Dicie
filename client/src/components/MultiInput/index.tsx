import { createRef, useState, cloneElement } from "react";
import * as Styled from "./index.styled";

export type multiInputDataType = {
  index: number;
  isSeparate: boolean;
  isTopSeparate: boolean;
  isBottomSeparate: boolean;
};

interface MultiInputProps {
  children: Array<React.ReactElement>;
}

const MultiInput = ({ children }: MultiInputProps) => {
  const defaultData = children.map((child, i) => ({
    index: i,
    isSeparate: false,
    isTopSeparate: false,
    isBottomSeparate: false,
  }));

  const [multiInputData, setMiltiInputData] = useState(defaultData);

  const onChangeMultiInputData = (index: number, isSeparate: boolean) => {
    const newMultiInputData = defaultData.map((input, i) => {
      if (i === index) return { ...input, isSeparate };
      if (i === index - 1) return { ...input, isBottomSeparate: isSeparate };
      if (i === index + 1) return { ...input, isTopSeparate: isSeparate };
      return input;
    });
    setMiltiInputData(newMultiInputData);
  };

  console.log(multiInputData);

  return (
    <Styled.MultiInput>
      {children.map((child, i) =>
        cloneElement(child, {
          multiInputData: multiInputData[i],
          onChangeMultiInputData: (bool: boolean) =>
            onChangeMultiInputData(i, bool),
        })
      )}
    </Styled.MultiInput>
  );
};

export default MultiInput;
