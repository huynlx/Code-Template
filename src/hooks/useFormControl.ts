import { Form, FormInstance } from 'antd';

interface UseFormControl<Values> {
  form: FormInstance<Values>;
  setFormValues: (values: any) => void;
  getFormValues: () => Values;
  watchFormValue: (key: string) => any;
  resetFormValues: () => void;
  validateFormValues: () => Promise<Values>;
}

const { useForm, useWatch } = Form;

/**
 * Form Controller
 *
 * This function returns an object with methods to control a form.
 *
 * @template Values - The type of form values.
 * @returns {UseFormControl<Values>} - An object with form control methods.
 */
const useFormControl = <Values = any>(): UseFormControl<Values> => {
  // Create a form instance using the useForm hook
  const [form] = useForm<Values>();

  /**
   * Set form values.
   *
   * @param {any} values - The values to set on the form.
   * @returns {void}
   */
  const setFormValues = (values: any): void => {
    form.setFieldsValue(values);
  };

  /**
   * Get form values.
   *
   * @returns {any} - The current values of the form.
   */
  const getFormValues = () => {
    return form.getFieldsValue();
  };

  /**
   * Watch form value changes.
   *
   * @param {string} key - The key of the value to watch.
   * @returns {any} - The current value of the watched field.
   */
  const watchFormValue = (key: string) => {
    return useWatch(key, form);
  };

  /**
   * Reset form values to their initial state.
   *
   * @returns {void}
   */
  const resetFormValues = () => {
    form.resetFields();
  };

  /**
   * Validate form values.
   *
   * @returns {Promise<void>} - A promise that resolves if all form fields pass validation, and rejects with an error if any field fails validation.
   */
  const validateFormValues = () => {
    return form.validateFields();
  };

  return {
    form,
    setFormValues,
    getFormValues,
    watchFormValue,
    resetFormValues,
    validateFormValues
  };
};

export default useFormControl;
