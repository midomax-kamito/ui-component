import { useContext, useEffect, useRef, useState } from 'react';
import { cn, REGEX_SNAKE_CASE, toLowerSnakeCase } from '../../../../lib';
import { Input } from '../../text-input';
import { SingleSelectContext } from './single-select-context';
import { Button } from '../../button';
import { Hash } from '@phosphor-icons/react';
import { Form, FormInstance } from '../../form';

export const InputAction = ({
  defaultValue = { title: '', value: '' },
  onClose,
  action,
  onSubmited,
  state,
  form,
}: {
  defaultValue?: { title: string; value: string };
  onClose?: () => void;
  action: 'update' | 'create';
  onSubmited: (
    title: string,
    value: string,
    valueKeyOption?: Set<string>,
  ) => void;
  state?: {
    itemKey: number | string | null;
    mode: 'view' | 'create' | 'update';
  };
  form: FormInstance;
}) => {
  const { placeholders, errors, labelAction, valueKeyOption } =
    useContext(SingleSelectContext);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorsState, setErrorsState] = useState<{
    title?: boolean;
    value?: boolean;
    format?: boolean;
    duplicate?: boolean;
  }>({});
  const [inputTitle, setInputTitle] = useState<string>(defaultValue.title);
  const [inputValue, setInputValue] = useState<string>(defaultValue.value);
  const [editingItemHeight, setEditingItemHeight] = useState<number | null>(
    null,
  );

  const options = Form.useWatch('options', form);

  useEffect(() => {
    valueKeyOption?.clear();
    options?.forEach((opt: any) => {
      if (opt.value) valueKeyOption?.add(opt.value);
    });
  }, [options, valueKeyOption]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const scrollIntoViewParentWhenError = () => {
    const parentListBox = document.getElementById('parent-listbox');
    const itemElement = ref.current;
    if (action === 'update' && itemElement && parentListBox) {
      const itemRect = itemElement.getBoundingClientRect();
      const parentRect = parentListBox.getBoundingClientRect();
      const itemFullHeight = editingItemHeight || itemRect.height;
      const rangeParentBottom = parentRect.bottom;
      const rangeParentTop = parentRect.top + itemFullHeight * 3;

      if (
        (itemRect.bottom + itemFullHeight > rangeParentBottom &&
          itemRect.top > rangeParentTop) ||
        itemRect.bottom > rangeParentBottom
      ) {
        parentListBox.scrollTo({
          top: parentListBox.scrollTop + itemFullHeight,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const itemElement = ref.current;
    if (itemElement) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setEditingItemHeight(entry.contentRect.height);
          scrollIntoViewParentWhenError();
        }
      });
      observer.observe(itemElement);
      return () => observer.disconnect();
    }
    return () => {};
  }, [editingItemHeight]);

  return (
    <div
      ref={ref}
      className={cn('flex flex-col w-full gap-[6px]', {
        'px-2 pb-2': action === 'create',
      })}
    >
      <div className="flex flex-row rounded-lg border border-gray-200 transition-all duration-300 ease-in w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2 px-2 pt-2">
            <Input
              ref={inputRef}
              name="title"
              placeholder={placeholders?.inputTitle}
              className={cn('bg-inherit focus:bg-inherit', {
                'border-red-500 hover:ring-0':
                  errorsState.title && inputTitle.trim().length === 0,
              })}
              value={inputTitle}
              onSubmitValue={(value) => {
                setInputTitle(value);
                setErrorsState((prev) => ({
                  ...prev,
                  title: value.trim().length === 0,
                }));
              }}
              onBlur={(event) => {
                const value = event.currentTarget.value.trim();
                if (
                  (!inputValue || inputValue.trim().length === 0) &&
                  value.length > 0
                ) {
                  let baseKey = toLowerSnakeCase(value);
                  let uniqueKey = baseKey;
                  let counter = 1;
                  while (valueKeyOption?.has(uniqueKey)) {
                    // Nếu đã có hậu tố "_1", "_2",... thì bỏ qua hậu tố trước khi thêm cái mới
                    const match = uniqueKey.match(/^(.*)_(\d+)$/);
                    if (match) {
                      baseKey = match[1]!;
                    }
                    uniqueKey = `${baseKey}_${counter}`;
                    counter++;
                  }
                  setInputValue(uniqueKey);
                }
              }}
            />
            {errorsState.title && (
              <span className="text-red-500 text-sm mx-1">
                {errors?.inputTitleRequired}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Input
              name="value"
              placeholder={placeholders?.inputValue}
              className={cn('flex-shrink-0 bg-inherit focus:bg-inherit', {
                'border-red-500 hover:ring-0':
                  (errorsState.value && inputValue.trim().length === 0) ||
                  (errorsState.format &&
                    inputValue.trim().length > 0 &&
                    !REGEX_SNAKE_CASE.test(inputValue)) ||
                  (errorsState.duplicate && inputValue.trim().length > 0),
              })}
              value={inputValue}
              onSubmitValue={(value) => {
                setInputValue(value);
                const trimmedValue = value.trim();

                const options = form.getFieldValue('options') ?? [];
                const count = options.filter(
                  (item: { value: string }) => item.value === trimmedValue,
                ).length;

                setErrorsState((prev) => ({
                  ...prev,
                  value: trimmedValue.length === 0,
                  format:
                    trimmedValue.length > 0 &&
                    !REGEX_SNAKE_CASE.test(trimmedValue),
                  duplicate: count >= 1,
                }));
              }}
              prefix={
                <Hash
                  size={16}
                  weight="regular"
                  className={cn('text-gray-500', {
                    'text-current': inputValue !== '',
                  })}
                />
              }
            />
            {errorsState.value && inputValue.trim().length === 0 && (
              <span className="text-red-500 text-sm mx-1">
                {errors?.inputValueRequired}
              </span>
            )}
            {errorsState.format &&
              inputValue.trim().length > 0 &&
              !REGEX_SNAKE_CASE.test(inputValue) && (
                <span className="text-red-500 text-sm mx-1">
                  {errors?.inputValueNotMatch}
                </span>
              )}
            {errorsState.duplicate && inputValue.trim().length > 0 && (
              <span className="text-red-500 text-sm mx-1">
                {errors?.inputValueAlreadyExited}
              </span>
            )}
          </div>
          <div className="flex flex-row gap-2 px-2 pb-2 w-full justify-between">
            <Button
              variant="neutral"
              className="text-primary-500 w-full bg-gray-100"
              onClick={() => {
                onClose?.();
              }}
            >
              {labelAction?.cancel}
            </Button>
            <Button
              className="text-white w-full"
              onClick={() => {
                const title = inputTitle.trim();
                const value = inputValue.trim();

                const options = form.getFieldValue('options') ?? [];

                const count = options.filter(
                  (item: { value: string }) =>
                    item.value === value && item.value !== state?.itemKey,
                ).length;

                const newErrors: typeof errorsState = {};
                if (title.length === 0) newErrors.title = true;
                if (value.length === 0) newErrors.value = true;
                if (count > 0) newErrors.duplicate = true;
                else if (!REGEX_SNAKE_CASE.test(value)) newErrors.format = true;

                if (Object.keys(newErrors).length > 0) {
                  setErrorsState(newErrors);
                  return;
                }

                setErrorsState({});
                onSubmited(
                  inputTitle.trim(),
                  inputValue.trim(),
                  valueKeyOption?.add(inputValue.trim()),
                );
                onClose?.();
              }}
            >
              {labelAction?.[action]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
