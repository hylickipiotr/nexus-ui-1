import clsx from "clsx";
import React, { forwardRef, HTMLAttributes } from "react";

enum ButtonSize {
  Xs = "px-2 py-1 text-xs",
  S = "px-2 py-1.5 text-sm",
  Base = "px-3 py-2 text-base",
  L = "px-3.5 py-2 text-base",
  Xl = "px-4 py-3 text-lg",
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, size = ButtonSize.Base, ...props }, ref) => {
    const combinedClassName = clsx(
      "bg-blue-500 text-white rounded",
      size,
      className
    );

    return (
      <button ref={ref} {...props} className={combinedClassName}>
        {children}
      </button>
    );
  }
);

export { Button };
