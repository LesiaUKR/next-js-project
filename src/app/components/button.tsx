'use client';
import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'w-644 bg-gray-900 text-sm text-zinc-50',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}
