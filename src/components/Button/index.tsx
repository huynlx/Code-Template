import { Button, ButtonProps } from 'antd';
import React from 'react';
import styled from 'styled-components';

export interface ButtonBaseProps extends ButtonProps {
  title: string;
}

const ButtonBase: React.FC<ButtonBaseProps & Record<string, any>> = (props) => {
  const { title, htmlType = 'button', type = 'primary', ...rest } = props;
  return (
    <WrapperButton htmlType={htmlType} type={type} {...rest}>
      {title}
    </WrapperButton>
  );
};

const WrapperButton = styled(Button)`
  height: 32px;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    font-size: 12px !important;
    height: 32px !important;
    font-size: 12px;
  }

  span {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 480px) {
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  &.ant-btn-ghost {
    color: var(--t-vh-color);
    border-color: var(--t-vh-color);
    svg {
      fill: var(--t-vh-color);
    }
    &:hover {
      opacity: 0.8;
    }

    &.vh-primary-btn {
      color: var(--t-primary-color);
      border-color: var(--t-primary-color);
      svg {
        fill: var(--t-primary-color);
      }
      &:hover {
        svg {
          fill: var(--t-primary-color);
        }
        opacity: 0.8;
      }
    }
    &.vh-cancel-btn {
      color: var(--t-vh-error-color);
      border-color: var(--t-vh-error-color);
      svg {
        fill: var(--t-vh-error-color);
      }
      &:hover {
        svg {
          fill: var(--t-vh-error-color);
        }
        opacity: 0.8;
      }
    }
  }
  &.vh-delete-btn {
    background: #e95454;
    color: #ffffff;
  }
  &.vh-cancel-btn-u {
    background: #dca447;
    color: #ffffff;
  }

  &.refresh-icon,
  &.download-icon {
    background-color: #f4f6fc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #f4f6fc;
    border-color: #d0daff;
    border-width: 2px;
    border-radius: 5px;

    &:hover {
      background-color: #f4f6fc;
      border-color: #d0daff;
      border-width: 2px;
      border-radius: 5px;
    }
  }
`;

export default ButtonBase;
