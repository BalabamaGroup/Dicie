import { useState, cloneElement } from "react";
import * as Styled from "./index.styled";

export type multiInputDataType = {
  index: number;
  isSeparate: boolean;
  isTopSeparate: boolean;
  isBottomSeparate: boolean;
};

interface MultiInputProps {
  className?: string;
  isScale?: boolean;
  children: Array<React.ReactElement>;
}

const MultiInput = ({
  className,
  isScale = false,
  children,
}: MultiInputProps) => {
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

  return (
    <Styled.MultiInput className={className} isScale={isScale}>
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
