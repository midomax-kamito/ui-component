import * as React from "react";
import RCForm, { Field, FormInstance, FormProps, FormProvider, FormRef, List, useForm, useWatch } from "rc-field-form";
import type { FieldProps } from "rc-field-form/lib/Field";
import { Meta } from "rc-field-form/lib/interface";
import { ListProps } from "rc-field-form/lib/List";

declare const InternalForm: <Values = any>(
    props: FormProps<Values> & {
        ref?: React.Ref<FormRef<Values>>;
    }
) => React.ReactElement;

type InternalFormType = typeof InternalForm;

interface RefFormType extends InternalFormType {
    FormProvider: typeof FormProvider;
    Field: typeof Field;
    List: typeof List;
    useForm: typeof useForm;
    useWatch: typeof useWatch;
}

const Form: RefFormType = RCForm;

interface ChilProps {
    [name: string]: any;
}

interface FormItemProps extends FieldProps {
    renderItem: ({
        control,
        meta,
        form,
        isError,
    }: {
        control: ChilProps;
        meta: Meta;
        form: FormInstance;
        isError: boolean;
    }) => React.ReactNode;
}

const FormItem = ({ renderItem, ...propsFormItem }: FormItemProps) => {
    return (
        <Form.Field {...propsFormItem}>
            {(control, meta, form) => {
                const isError = (meta.touched || meta.validated || meta.validating) && meta.errors.length > 0;
                return (
                    <div className="flex flex-col gap-2 items-start w-full">
                        {renderItem({ control, meta, form, isError })}
                        {isError && (
                            <span className="block text-sm font-normal text-red-500">{meta.errors[0] || ""}</span>
                        )}
                    </div>
                );
            }}
        </Form.Field>
    );
};

export { Form, FormItem, FormProvider };
export type { FormInstance, FormProps, FieldProps, Meta, FormItemProps, ListProps };
