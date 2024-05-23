import classNames from 'classnames'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  label?: string
  error: ReactNode
  success: ReactNode
  helperText: ReactNode
  required?: boolean
  className?: string
}

const FieldWrapper = ({
  label,
  error,
  success,
  helperText,
  required,
  children,
  className,
}: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center mb-1 ">
        <div className="text-primary-90 font-semibold label-L2">{label}</div>
        <div>
          {required && (
            <div className="bg-status1-20 p-0 pr-[7px] pb-0 pl-[7px] rounded-full ml-2">
              <div className="text-status1-70 font-bold text-[10px]">{'Required'}</div>
            </div>
          )}
        </div>
      </div>
      <div
        className={classNames(`border-solid border-[1.5px] rounded border-primary-20`, {
          'border-[2px] border-warning-50': error,
        })}
      >
        {children}
      </div>
      {(error || success || helperText) && (
        <div className="flex flex-row items-center mt-1">
          <div
            className={classNames(`label-L2 ml-[7px]`, {
              'text-warning-80': error,
              'text-secondary3-70': success,
              'text-neutral-80': helperText,
            })}
          >
            {error || success || helperText}
          </div>
        </div>
      )}
    </div>
  )
}

export default FieldWrapper
