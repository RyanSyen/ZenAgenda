import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryBtn = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button className="primary-btn ">
        {props.children}
        <div className="primary-btn-border" />
      </button>
    );
  }
);

PrimaryBtn.displayName = "Primary Button";

export default PrimaryBtn;
