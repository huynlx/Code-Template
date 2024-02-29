import { Form } from 'antd';
import { Rule } from 'antd/lib/form';
import React from 'react';
import styled from 'styled-components';

interface FormItemProps {
  label?: string;
  name?: string | any[];
  rules?: Rule[];
  children: React.ReactNode;
  hasFeedback?: boolean;
  required?: boolean;
  labelTop?: string;
  showRequired?: boolean;
}

const FormItemBase: React.FC<FormItemProps & Record<string, any>> = ({
  rules,
  hasFeedback = false,
  children,
  labelTop,
  showRequired,
  ...rest
}) => {
  return (
    <>
      <WrapperFormItem
        rules={rules}
        hasFeedback={hasFeedback}
        labelAlign="left"
        validateTrigger={['onChange', 'onBlur']}
        {...rest}>
        {children}
      </WrapperFormItem>
      {!!labelTop && (
        <Label>
          {labelTop} {showRequired && <span className="required">*</span>}
        </Label>
      )}
    </>
  );
};

const Label = styled.label<{ float?: string }>`
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  -webkit-transition: 0.2s ease all;
  transition: 0.2s ease all;
  top: -10px;
  font-size: 10px;
  color: #777474cc;
  background: #fff;
  padding: 0px 10px 0px 5px;
  .required {
    color: red;
    font-size: 10px;
    margin-left: 4px;
    position: absolute;
  }
`;

const WrapperFormItem = styled(Form.Item)`
  margin-bottom: 12px;
  width: 100%;
  .ant-form-item-explain-error {
    font-size: 12px;
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-left: 4px;
    color: #ff4d4f;
    font-size: 12px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
  .ant-form-item-label > label {
    font-size: 14px;
    font-weight: 700;
    color: #373737;
    height: 36px;
    width: fit-content;
  }

  .ant-form-item-label > label::after {
    content: '';
  }
  .ant-form-item-label {
    padding: 0 !important;
    display: contents;
  }
  .ant-picker-input > input[disabled] {
    color: black;
  }
`;

export default FormItemBase;
