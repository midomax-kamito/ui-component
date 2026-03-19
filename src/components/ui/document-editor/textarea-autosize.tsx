import { X } from '@phosphor-icons/react';
import * as React from 'react';
import { WrapperEditor } from './WrapperEditor';
import { cn } from '../../../lib';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Style = Omit<
  NonNullable<TextareaProps['style']>,
  'maxHeight' | 'minHeight'
> & {
  height?: number;
};

export type TextareaHeightChangeMeta = {
  rowHeight: number;
};
export interface TextareaAutosizeProps
  extends Omit<TextareaProps, 'style' | 'onChange' | 'value'> {
  style?: Style;
  isError?: boolean;
  classNameRoot?: string;
  noStyte?: boolean;
  onChange?: (value: string) => void;
  value?: string;
}

const TextareaAutosize = React.forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>(
  (
    {
      onChange = () => {},
      isError,
      classNameRoot,
      noStyte,
      rows = 1,
      readOnly,
      disabled,
      placeholder = 'Nhập nội dung...',
      value,
      ...props
    },
    userRef: React.Ref<HTMLTextAreaElement>,
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    React.useImperativeHandle(userRef, () => textareaRef.current!, []);
    const [content, setContent] = React.useState<string>(value || '');

    React.useEffect(() => {
      setContent(value || '');
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value);
      onChange(event.target.value);
    };

    React.useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [content]);

    return (
      <WrapperEditor
        className={classNameRoot}
        disabled={disabled}
        isError={isError}
        noStyte={noStyte}
        readOnly={readOnly}
      >
        <textarea
          {...props}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            'peer h-auto w-full resize-none text-sm flex-1 text-gray-700 bg-inherit',
            'placeholder:text-gray-500',
            'focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0',
            props.className,
          )}
          rows={rows}
          onChange={handleChange}
          ref={textareaRef}
          value={content}
        />
        {!noStyte && (
          <span
            className="block peer-placeholder-shown:hidden peer-disabled-[not(:placeholder-shown)]:hidden peer-read-only-[not(:placeholder-shown)]:hidden"
            onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
              if (textareaRef.current) {
                setContent('');
                textareaRef.current.value = '';
                textareaRef.current.focus();
                handleChange({
                  ...event,
                  target: textareaRef.current,
                } as any);
              }
            }}
          >
            <X className="cursor-pointer text-gray-500" size={14} />
          </span>
        )}
      </WrapperEditor>
    );
  },
);

TextareaAutosize.displayName = 'TextareaAutosize';

export { TextareaAutosize };
