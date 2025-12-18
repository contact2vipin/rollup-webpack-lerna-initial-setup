import React from "react";
import classnames from 'classnames';
import { ButtonType } from './constant';
import styles from './Button.scss';

interface IProps {
    onClick: () => void;
    type: ButtonType;
}

const Button:React.FC<IProps> = ({onClick, type=ButtonType.PRIMARY}) => {
    const ctx = classnames({
        [styles.button]: true,
        [styles.primary]: type === ButtonType.PRIMARY,
        [styles.secondary]: type === ButtonType.SECONDARY,
    })
  return (
    <button className={ctx} onClick={onClick}>
        Click me
    </button>
  );
}

export {Button};