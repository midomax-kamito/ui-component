import * as React from "react";
import { Field, FormInstance, FormProps, FormProvider, FormRef, List, useForm, useWatch } from "rc-field-form";
import type { FieldProps } from "rc-field-form/lib/Field";
import { Meta } from "rc-field-form/lib/interface";
import { ListProps } from "rc-field-form/lib/List";
declare const InternalForm: <Values = any>(props: FormProps<Values> & {
    ref?: React.Ref<FormRef<Values>>;
}) => React.ReactElement;
type InternalFormType = typeof InternalForm;
interface RefFormType extends InternalFormType {
    FormProvider: typeof FormProvider;
    Field: typeof Field;
    List: typeof List;
    useForm: typeof useForm;
    useWatch: typeof useWatch;
}
declare const Form: RefFormType;
interface ChilProps {
    [name: string]: any;
}
interface FormItemProps extends FieldProps {
    renderItem: ({ control, meta, form, isError, }: {
        control: ChilProps;
        meta: Meta;
        form: FormInstance;
        isError: boolean;
    }) => React.ReactNode;
}
declare const FormItem: ({ renderItem, ...propsFormItem }: FormItemProps) => import("react/jsx-runtime").JSX.Element;
export { Form, FormItem, FormProvider };
export type { FormInstance, FormProps, FieldProps, Meta, FormItemProps, ListProps };
