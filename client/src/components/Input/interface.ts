import { ComponentColor } from '@/common/types/theme';
import { multiInputDataType } from '@/components/MultiInput';

export interface InputProps {
  id?: string;
  className?: string;
  type?: string;

  label?: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';

  size?: 'large' | 'medium';
  color?: 'auto' | ComponentColor;

  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;

  icon?: string;
  onIconClick?: React.MouseEventHandler<HTMLDivElement>;

  isError?: boolean;
  errorNote?: string;

  focusOnLoad?: boolean;

  multiInputData?: multiInputDataType;
  onChangeMultiInputData?: Function;
}
