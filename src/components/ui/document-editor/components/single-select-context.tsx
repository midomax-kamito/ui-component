import { createContext } from 'react';
import { Options } from '../single-select';

export type SingleSelectContextType = {
  labelAction?: {
    create?: string;
    update?: string;
    cancel?: string;
    delete?: string;
  };
  placeholders?: {
    inputTitle?: string;
    inputValue?: string;
    addButton?: string;
  };
  errors?: {
    inputTitleRequired?: string;
    inputValueRequired?: string;
    inputValueNotMatch?: string;
    inputValueAlreadyExited?: string;
  };
  onOptionsChange?: (options: Options[]) => void;
  valueKeyOption?: Set<string>;
};

export const defaultContextValue: SingleSelectContextType = {
  labelAction: {
    create: 'Tạo mới',
    update: 'Cập nhật',
    cancel: 'Huỷ bỏ',
    delete: 'Xóa',
  },
  placeholders: {
    inputTitle: 'Nhập giá trị',
    inputValue: 'Nhập mã giá trị',
    addButton: 'Thêm giá trị',
  },
  errors: {
    inputTitleRequired: 'Giá trị không được để trống.',
    inputValueRequired: 'Mã giá trị không được để trống.',
    inputValueNotMatch: 'Mã giá trị không đúng định dạng.',
    inputValueAlreadyExited: 'Mã giá trị đã tồn tại.',
  },
  valueKeyOption: new Set(),
};

export const SingleSelectContext =
  createContext<SingleSelectContextType>(defaultContextValue);
