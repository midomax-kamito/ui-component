import React from 'react';
import { cn } from '../../lib';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { Spinner } from './spinner';

const SpinVariants = cva(
  clsx(
    'absolute top-0 left-0 right-0 bottom-0 bg-white-50 z-20 ',
    'flex items-center justify-center',
  ),
);

// const SpinnerVariants = cva(clsx('spinner grid bg-transparent'), {
//   variants: {
//     size: {
//       sm: 'w-10 h-10 after:bg-spin-sm-after before:bg-spin-sm-before before:m-[3.2px]',
//       md: 'w-14 h-14 after:bg-spin-md-after before:bg-spin-md-before before:m-[4.5px]',
//       lg: 'w-18 h-18 after:bg-spin-lg-after before:bg-spin-lg-before before:m-[5.8px]',
//     },
//     speed: {
//       slow: 'after:animate-animate-spin-avg before:animate-animate-spin-avg-linear',
//       avg: 'after:animate-animate-spin-avg before:animate-animate-spin-avg-linear',
//       fast: 'after:animate-animate-spin-fast before:animate-animate-spin-fast-linear',
//     },
//   },
//   defaultVariants: {
//     size: 'md',
//     speed: 'avg',
//   },
// });

const Spin = ({
  loading,
  className,
  children,
  fullScreen,
  size,
}: {
  loading?: boolean;
  className?: string;
  fullScreen?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'l' | 'lg' | null;
} & React.PropsWithChildren) => {
  if (fullScreen)
    return (
      <div className={cn(SpinVariants(), { hidden: !loading }, className)}>
        <Spinner />
      </div>
    );
  return (
    <div className={cn('h-full w-full relative', className)}>
      {loading && (
        <div className={cn(SpinVariants())}>
          <Spinner size={size} />
        </div>
      )}
      {children}
    </div>
  );
};
export { Spin };
