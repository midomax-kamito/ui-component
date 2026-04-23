import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

import {
  Badge,
  Combobox,
  Form,
  TreeSelect,
  OptionItemType,
  TreeDataType,
  Empty,
  BreadCrumb,
  DataBreadCrumb,
  toast,
  Alert,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  DocumentEditor,
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  FormItem,
  MultipleSelect,
  Spin,
  Progress,
} from './components/ui';
import { IDatePicker, IDateRangePicker } from './components/ui/date-picker';
import { Button } from './components/ui/button';
import {
  CheckCircle,
  CircleNotch,
  Clock,
  MagnifyingGlass,
  X,
} from '@phosphor-icons/react';
import dayjs from 'dayjs';
import { cn } from './lib';

const { DatePicker, TextareaAutosize, NumberInput, SingleSelect } =
  DocumentEditor;
const listOptions: OptionItemType[] = [
  {
    title: 'Item 1',
    value: '1',
    disabled: true,
  },
  {
    title: 'Item 2',
    value: '2',
    disabled: false,
  },
  {
    title: 'Item 3',
    value: '3',
    disabled: false,
  },
  {
    title: 'Item 4',
    value: '4',
    disabled: false,
  },
];

const options = ['1'];

const treeData: TreeDataType[] = [
  {
    value: 'view-data',
    label: 'Xem thống kê',
    checked: false,
  },
  {
    value: 'monitoring-online',
    label: 'Giám sát khách hàng trực tuyến',
    checked: false,
  },
  {
    value: 'manage-invoices',
    label: 'Quản lý hóa đơn',
    checked: false,
    children: [
      {
        value: 'view-manage-invoices',
        label: 'Xem hóa đơn',
        checked: false,
      },
      {
        value: 'craete-manage-invoices',
        label: 'Tạo hóa đơn',
        checked: false,
      },
      {
        value: 'update-manage-invoices',
        label: 'Cập nhật hóa đơn',
        checked: false,
      },
      {
        value: 'delete-manage-invoices',
        label: 'Xóa hóa đơn',
        checked: false,
      },
    ],
  },
  {
    value: 'statistical-report',
    label: 'Báo cáo thống kê',
    checked: false,
    children: [
      {
        value: 'view-statistical-report',
        label: 'Xem báo cáo thống kê',
        checked: false,
      },
      {
        value: 'create-statistical-report',
        label: 'Tạo báo cáo thống kê',
        checked: false,
      },
      {
        value: 'update-statistical-report',
        label: 'Cập nhật báo cáo thống kê',
        checked: false,
      },
      {
        value: 'delete-statistical-report',
        label: 'Xóa báo cáo thống kê',
        checked: false,
      },
    ],
  },
  {
    value: 'account-setting',
    label: 'Cài đặt tài khoản',
    checked: false,
    children: [
      {
        value: 'view-account-setting',
        label: 'Xem',
        checked: false,
        isControl: true,
      },
      {
        value: 'create-account-setting',
        label: 'Tạo mới',
        checked: false,
      },
      {
        value: 'update-account-setting',
        label: 'Cập nhật',
        checked: false,
      },
      {
        value: 'delete-account-setting',
        label: 'Xóa',
        checked: false,
      },
    ],
  },
  {
    value: 'authentication-setting',
    label: 'Cài đặt nhóm quyền',
    checked: false,
    children: [
      {
        value: 'view-authentication-setting',
        label: 'Xem',
        checked: false,
      },
      {
        value: 'create-authentication-setting',
        label: 'Tạo mới',
        checked: false,
      },
      {
        value: 'update-authentication-setting',
        label: 'Cập nhật',
        checked: false,
      },
      {
        value: 'delete-authentication-setting',
        label: 'Xóa',
        checked: false,
      },
    ],
  },
];

const dataExample: DataBreadCrumb[] = [
  {
    title: (
      <div className="flex items-center gap-2">
        <X size={16} className="text-current" />
        <span>Khách hàng</span>
      </div>
    ), // Khách hàng
    path: '#',
  },
  {
    title: 'KCN Bình Phước', // KCN Bình Phước
    path: '#',
  },
  {
    title: 'Nhân Hoàng A', // Nhân Hoàng A
    path: null,
  },
];

const TitlePdf = () => {
  return (
    <div className="text-primary-500 font-medium">Đang xuất file PDF...</div>
  );
};
const LoadingPdf = ({ loading }: { loading?: boolean }) => {
  return (
    <Spin
      className="flex w-8 h-8 justify-center items-center top-1"
      loading={loading}
      size="sm"
    />
  );
};

type Status = 'done' | 'processing' | 'waiting';

interface FileProgressItemProps {
  filename: string;
  value: number;
  status: Status;
}

const statusIcon = {
  done: <CheckCircle className="text-primary-500" />,
  processing: (value: number) => <CircularProgressIcon value={value} />,
  waiting: <Clock className="text-gray-400" />,
};

type CircularProgressIconProps = {
  size?: number;
  strokeWidth?: number;
  value: number; // từ 0 đến 100
};

function App() {
  const [value, setValue] = useState('1');
  const [form] = Form.useForm();
  const formOptions = Form.useWatch('options', form);
  const [open, setOpen] = React.useState(false);

  const [isVisible, setIsVisible] = React.useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  const initValue = useMemo(() => {
    return {
      options,
    };
  }, [options]);

  useEffect(() => {
    form.setFieldsValue(initValue);
  }, [initValue]);
  return  (
    <div className="flex flex-col items-center h-screen gap-5 App">
      <div className="w-[500px] min-h-[550px] mt-20 border">
        <Empty />
      </div>
      <div className="w-[500px] min-h-[550px] mt-20 border">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* <Form form={form} initialValues={{ options }}>
        <Form.List name="options">
          {(fields) => {
            return (
              <>
                {fields.map((field) => (
                  <div key={field.name}>
                    <Form.Field name={[field.name, 'title']}>
                      <Input />
                    </Form.Field>
                  </div>
                ))}
              </>
            );
          }}
        </Form.List>
      </Form> */}
      <div className="mt-5 w-[247px] min-h-[550px] flex flex-col gap-3">
        <IDatePicker
          picker="date"
          value={dayjs('2025-02-11T23:20:00.000Z')}
          showTime={{
            showSecond: false,
          }}
          format={'DD/MM/YYYY HH:mm'}
          localeConfig={{
            today: 'Hiện tại',
            ok: 'Áp dụng',
            now: 'Hiện tại',
          }}
        />
        <IDateRangePicker
          format={'DD/MM/YYYY'}
          localeConfig={{
            today: 'Hiện tại',
            ok: 'Áp dụng',
            now: 'Hiện tại',
          }}
        />
        <DatePicker showNow picker="date" value={dayjs()} />
        <TextareaAutosize value="TextareaAutosize" disabled />
        <NumberInput value={''} suffix="năm" stringMode />
        {/* <SingleSelect options={options} allowClear /> */}
        <SingleSelect
          options={formOptions}
          allowClear
          allowAddOptions
          onOptionsChange={(options) => {
            console.log('onOptionsChange', { options });
            form.setFieldsValue({
              options,
            });
          }}
        />
        {/* <SingleSelect options={[]} allowClear textEmpty={<span>nodata</span>} />
        <SingleSelect
          options={[]}
          allowClear
          allowAddOptions
          textEmpty={<span>nodata</span>}
          onOptionsChange={(options) => {
            console.log({ options });
          }}
        /> */}
      </div>
      <Alert
        variant="warning"
        iconClose={true}
        className=" m-2"
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        handleClose={handleClose}
      >
        <span>fjalsdjlkfjasdklf</span>
      </Alert>

      <FileProgressItem
        filename="Bao cao quan trac moi truong.pdf"
        value={100}
        status="done"
      />
      <FileProgressItem
        filename="So do thuyet minh xu ly chat thai.docx"
        value={100}
        status="processing"
      />
      <FileProgressItem
        filename="Ke hoach xu ly chat thai.xls"
        value={0}
        status="waiting"
      />
      <div className="w-[500px] min-h-[550px] mt-20 border">
        <BreadCrumb data={dataExample} />
      </div>
      <div className="w-[500px] m-5">
        <TreeSelect
          treeData={treeData}
          defaultSelectedRowKeys={[
            'quan-ly',
            'create-filter',
            'permission-1',
            'permission-2',
            'permission-3',
            'permission-4',
            'permission-5',
          ]}
        />
      </div>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Show Dialog
      </Button>
      <Button
        type="button"
        outline
        onClick={() =>
          // toast.error("My cancel toast", {
          //     className: "bg-white text-red-500",
          //     position: "top-center",
          // })
          toast({
            type: 'error',
            title: <TitlePdf />,
            // isShowIcon: false,
            description: 'My success toast description',
            loading: <LoadingPdf loading={true} />,
            options: {
              position: 'bottom-right',
              duration: 100000,
              // action: (
              //   <Button
              //     variant={'neutral'}
              //     onClick={() => alert('Custom button action')}
              //     className="text-sm text-gray-700 border border-gray-200"
              //     size="sm"
              //   >
              //     Thử lại
              //   </Button>
              // ),
            },
          })
        }
      >
        toast
      </Button>

      <div className="w-[500px]"></div>
      <div className="w-[500px]">
        <Combobox
          size="sm"
          onChange={(val) => setValue(val)}
          placeholder="Place holder"
          // suffixes={<div>sau</div>}
          value={value}
          options={listOptions}
          searchInputOption={{
            placeholder: 'Search...',
            icon: <MagnifyingGlass size={18} />,
          }}
        />
        <MultipleSelect
          options={listOptions}
          maxTagCount={1}
          value={['1', '2']}
        />
        <Combobox
          size="sm"
          onChange={(val) => setValue(val)}
          placeholder="Place holder"
          // header={<div>Header</div>}
          // footer={<div>footer</div>}
          // prefixes={<div>trước</div>}
          // suffixes={<div>sau</div>}
          value={value}
          searchable={false}
          options={listOptions}
          searchInputOption={{
            placeholder: 'Search...',
            icon: <MagnifyingGlass size={18} />,
          }}
          customValue={(child) => {
            return <Badge variant="success">{child}</Badge>;
          }}
        />
      </div>

      <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent className="p-0 border-none gap-0 max-w-[380px]">
            <DialogTitle className="hidden"></DialogTitle>
            <DialogDescription className="hidden"></DialogDescription>
            <Form form={form} initialValues={{ options }}>
              <FormItem
                name="options"
                renderItem={({ control }) => {
                  return (
                    <MultipleSelect
                      options={listOptions || []}
                      onChange={control.onChange}
                      maxTagCount={2}
                      modalPopover
                      placeholder="Chọn nhóm quyền"
                      sideOffset={-25}
                      size="md"
                      {...control}
                      customValue={(value, options, handleRemove) => {
                        console.log('value:', value);

                        return value.map((val: string, index) => {
                          return (
                            <Badge
                              key={index}
                              className={cn(
                                'shadow-none max-w-[150px] truncate flex flex-row items-center gap-2',
                              )}
                            >
                              <span className="truncate flex-1">
                                {
                                  options.find((option) => option.value === val)
                                    ?.title
                                }
                              </span>

                              <X
                                size={14}
                                onClick={(event: any) => {
                                  event.stopPropagation();
                                  handleRemove(val);
                                }}
                              />
                            </Badge>
                          );
                        });
                      }}
                    />
                  );
                }}
              />
            </Form>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
}

const FileProgressItem: React.FC<FileProgressItemProps> = ({
  filename,
  value,
  status,
}) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm">
    <div className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-lg">
      {status === 'processing'
        ? statusIcon.processing(value)
        : statusIcon[status]}
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-gray-900">{filename}</div>
      <div className="flex items-center gap-2 mt-1">
        <div className="flex-1">
          <Progress value={value} />
        </div>
        <span className="text-xs text-gray-500 w-8 text-right">{value}%</span>
      </div>
    </div>
  </div>
);

const CircularProgressIcon: React.FC<CircularProgressIconProps> = ({
  size = 20,
  strokeWidth = 2,
  value,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Vòng nền xám */}
      <circle
        stroke="#E5E7EB" // gray-200
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Vòng màu xanh dần theo tiến trình */}
      <circle
        stroke="#3B82F6" // blue-500 (tailwind primary)
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
};
export default App;
