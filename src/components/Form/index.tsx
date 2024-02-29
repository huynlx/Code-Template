import React, { FC } from 'react';
import { Col, Form, FormInstance, Row } from 'antd';

interface FormProps<T> {
  children: React.ReactNode;
  initialValues?: T;
  handleSubmit?: any;
  form?: FormInstance<any>;
  layout?: 'horizontal' | 'inline' | 'vertical';
  actions?: React.ReactNode;
  onValuesChange?: any;
  ref?: any;
}

const FormBase: FC<FormProps<any> & Record<string, any>> = ({
  children,
  initialValues,
  handleSubmit,
  actions,
  layout = 'vertical',
  onValuesChange,
  ...rest
}) => (
  <Form
    initialValues={initialValues}
    onFinish={handleSubmit}
    layout={layout}
    onValuesChange={onValuesChange}
    {...rest}>
    <Row>
      <Col span={24}>{children}</Col>
      <Col span={24}>{actions}</Col>
    </Row>
  </Form>
);

export default FormBase;
