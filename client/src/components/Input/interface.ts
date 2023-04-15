import { ComponentColor } from '@/common/types/theme';
import { multiInputDataType } from '@/components/MultiInput';

export interface InputProps {
  id?: string;
  className?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';

  color?: 'auto' | ComponentColor;
  size?: 'large' | 'medium';
  isVibrant?: boolean;

  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  iconData?: {
    iconSrc: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
  };

  focusOnLoad?: boolean;

  isValid?: boolean;
  setIsValid?: Function;
  validationData?: { regex: RegExp; note: string };
  existanceData?: { values: Array<string>; note: string };
  customTest?: { test: Function; note: string };
  customDependancies?: Array<any>;

  multiInputData?: multiInputDataType;
  onChangeMultiInputData?: Function;
}
