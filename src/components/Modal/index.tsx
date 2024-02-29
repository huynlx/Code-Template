import { Modal, ModalProps, Spin } from 'antd';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ModalBaseProps = PropsWithChildren<
  ModalProps & {
    visible?: boolean;
    onCancel: (e?: any) => void;
    title: React.ReactNode;
    actions: React.ReactNode;
    width?: number;
    height?: number;
    className?: string;
    process?: {
      loading: boolean;
      msg: string;
    };
  }
>;

const ModalBase: React.FC<ModalBaseProps> = (props) => {
  const {
    children,
    width = 800,
    actions,
    className,
    process = { loading: false, msg: '' },
    ...rest
  } = props;
  return (
    <ModalWrapper
      width={width}
      footer={actions}
      maskClosable={false}
      className={className}
      {...rest}>
      <Spin spinning={process.loading} tip={process.msg}>
        {children}
      </Spin>
    </ModalWrapper>
  );
};

const ModalWrapper = styled(Modal)`
  .ant-modal-title {
    font-weight: 700;
    font-size: 20px;
    color: #303030;
  }
  .ant-modal-content {
    border-radius: 12px;
    padding: 10px;
  }
  .ant-modal-header {
    border-radius: 12px 12px 0 0;
  }
  .ant-modal-body {
    padding-bottom: 0 !important;

    max-height: 41rem;
    @media (max-width: 480px) {
      max-height: 60vh;
    }

    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      border: 1px solid var(--t-primary-color);
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--t-primary-color);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #213169;
    }
  }
  &.padding-bt {
    .ant-modal-body {
      padding-bottom: 25px !important;
    }
  }
  .ant-modal-close-x {
    svg {
      color: black;
      width: 18px;
      height: 18px;
    }
  }
`;

export default ModalBase;
