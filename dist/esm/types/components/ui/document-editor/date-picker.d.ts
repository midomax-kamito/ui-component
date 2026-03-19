import { PickerRef } from 'rc-picker/lib/interface';
import React from 'react';
import '../date-picker/styles.css';
import { IDatePickerProp } from '../date-picker/DatePicker';
declare const DatePicker: React.ForwardRefExoticComponent<Omit<IDatePickerProp, "ref"> & React.RefAttributes<PickerRef>>;
export { DatePicker };
