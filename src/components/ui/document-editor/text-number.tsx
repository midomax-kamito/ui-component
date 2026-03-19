import { CaretDown, CaretUp, X } from '@phosphor-icons/react';
import type {
  InputNumberProps as RcInputNumberProps,
  ValueType,
} from 'rc-input-number';
import RcInputNumber from 'rc-input-number';
import React from 'react';
import { WrapperEditor } from './WrapperEditor';
import { cn } from '../../../lib';

type SizeType = 'small' | 'middle' | 'large';
type InputStatus = '' | 'warning' | 'error';
type Variant = 'outlined' | 'borderless' | 'filled';

export interface InputNumberProps<T extends ValueType = ValueType>
  extends Omit<RcInputNumberProps<T>, 'prefix' | 'size' | 'controls'> {
  prefixCls?: string;
  rootClassName?: string;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  status?: InputStatus;
  controls?: boolean | { upIcon?: React.ReactNode; downIcon?: React.ReactNode };
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
  isError?: boolean;
  classNameWrapper?: string;
  readOnly?: boolean;
}

const NumberInput = React.forwardRef<HTMLInputElement, InputNumberProps>(
  (props, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const {
      className,
      rootClassName,
      size,
      disabled,
      prefixCls,
      addonBefore,
      addonAfter,
      prefix,
      suffix,
      readOnly,
      status,
      controls = false,
      keyboard = false,
      variant,
      classNames,
      placeholder = 'Nhập số...',
      ...others
    } = props;
    let upIcon = <CaretUp className={`${prefixCls}-handler-up-inner`} />;
    let downIcon = <CaretDown className={`${prefixCls}-handler-down-inner`} />;
    const controlsTemp = typeof controls === 'boolean' ? controls : undefined;
    if (typeof controls === 'object') {
      upIcon =
        typeof controls.upIcon === 'undefined' ? (
          upIcon
        ) : (
          <span className={`${prefixCls}-handler-up-inner`}>
            {controls.upIcon}
          </span>
        );
      downIcon =
        typeof controls.downIcon === 'undefined' ? (
          downIcon
        ) : (
          <span className={`${prefixCls}-handler-down-inner`}>
            {controls.downIcon}
          </span>
        );
    }

    const [currentValue, setCurrentValue] = React.useState<ValueType | null>(
      others.value ?? null,
    );

    return (
      <WrapperEditor
        disabled={disabled}
        isError={others.isError}
        className={others.classNameWrapper}
        readOnly={readOnly}
      >
        <RcInputNumber
          {...others}
          ref={inputRef}
          disabled={disabled}
          className={cn(
            'peer flex flex-row gap-2 w-full h-full bg-inherit',
            'p-0 m-0 border-none border-0 outline-none outline-0',
            ' [&_.rc-input-number-suffix]:flex-shrink-0 [&_.rc-input-number-suffix]:w-auto [&_.rc-input-number-suffix]:flex [&_.rc-input-number-suffix]:items-center [&_.rc-input-number-suffix]:justify-center',
            '[&_.rc-input-number]:w-full  [&_.rc-input-number]:flex-1 [&_.rc-input-number]:min-w-0 [&_.rc-input-number]:flex [&_.rc-input-number]:items-center',
            '[&_input]:w-full [&_input]:bg-inherit [&_input]:text-gray-700 [&_input]:text-sm [&_input]:leading-[21px] [&_input]:outline-0',
            '[&_input]:focus-visible:border-none [&_input]:focus-visible:border-0 [&_input]:focus-visible:outline-none [&_input]:focus-visible:outline-0',
            '[&_input]:placeholder:text-sm [&_input]:placeholder:leading-[21px] [&_input]:placeholder:text-gray-500',
            '[&_.rc-input-number-input-wrap]:flex-1',
            className,
          )}
          classNames={classNames}
          upHandler={upIcon}
          downHandler={downIcon}
          prefixCls={prefixCls}
          readOnly={readOnly}
          controls={controlsTemp}
          keyboard={keyboard}
          prefix={prefix}
          placeholder={placeholder}
          suffix={
            <div className="flex flex-row gap-2 items-center">
              {currentValue !== '' &&
                currentValue !== null &&
                currentValue !== undefined &&
                !disabled &&
                !readOnly && (
                  <span
                    className="block cursor-pointer"
                    onClick={() => {
                      others.onChange?.(null);
                      setCurrentValue(null);
                      if (inputRef.current) {
                        inputRef.current.focus();
                      }
                    }}
                  >
                    <X className="cursor-pointer text-gray-500" size={14} />
                  </span>
                )}
              {suffix}
            </div>
          }
          addonBefore={addonBefore}
          addonAfter={addonAfter}
          value={currentValue}
          onChange={(value) => {
            setCurrentValue(value);
            others.onChange?.(value);
          }}
        />
      </WrapperEditor>
    );
  },
);

NumberInput.displayName = 'NumberInput';
export { NumberInput };
