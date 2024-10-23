import React, { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button className={styles.Button} {...props}>
      {children}
    </button>
  );
};

export default Button;
