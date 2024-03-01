import {
  REGEX_USERNAME,
  MSG_ERROR_STRING,
  MSG_ERROR_NUMBER,
  MSG_ERROR_SELECT_ONE_KEY,
  MSG_ERROR_EMAIL,
  MSG_ERROR_PASSWORD_MIN_LENGTH,
  REGEX_PASSWORD,
  MSG_ERROR_REGEX_PASSWORD,
  REGEX_IDENTITY_CARD,
  REGEX_PHONE_NUMBER,
  REGEX_NUMBER,
  MSG_ERROR_MAX_NUMBER
} from 'src/constants/validate';

export const msgMaxLength = (maxLength: number) => `Không được nhập quá ${maxLength} ký tự`;

export const validationUserName = ({ regex = REGEX_USERNAME, msg = 'UserName sai định dạng' }) => ({
  pattern: new RegExp(regex),
  message: msg
});

export const maxLengthRequired = ({ maxLength = 255 }) => ({
  max: maxLength,
  message: msgMaxLength(maxLength)
});

export const stringRequired = ({ msg = MSG_ERROR_STRING, whitespace = true }) => ({
  required: true,
  message: msg,
  whitespace
});

export const numberRequired = ({ msg = MSG_ERROR_NUMBER, whitespace = true }) => ({
  type: 'number',
  required: true,
  message: msg,
  whitespace
});

export const ArrayRequired = ({ msg = '' }) => ({
  required: true,
  message: `${MSG_ERROR_SELECT_ONE_KEY} ${msg}`,
  type: 'array'
});

export const objectRequired = ({ msg = MSG_ERROR_STRING, whitespace = true }) => ({
  type: 'object',
  required: true,
  message: msg,
  whitespace
});

export const stringRequiredNotMsg = () => ({
  required: true
});

export const emailValidation = ({ type = 'email', msg = MSG_ERROR_EMAIL }) => ({
  type: type,
  message: msg
});

export const minLengthValidation = ({ min = 8, msg = MSG_ERROR_PASSWORD_MIN_LENGTH }) => ({
  min: min,
  message: msg
});

export const specificationPassword = ({
  regex = REGEX_PASSWORD,
  msg = MSG_ERROR_REGEX_PASSWORD
}) => ({
  pattern: new RegExp(regex),
  message: msg
});

export const createSchemaValidation = (rules: any[]) => {
  return rules;
};

export const identityCardValidation = ({
  regex = REGEX_IDENTITY_CARD,
  msg = 'Vui lòng nhập số CMND/ CCCD hợp lệ - từ (9 - 12) ký tự'
}) => ({
  pattern: regex,
  message: msg
});

export const phoneNumberValidation = ({
  regex = REGEX_PHONE_NUMBER,
  msg = 'Vui lòng nhập số điện thoại hợp lệ'
}) => ({
  pattern: regex,
  message: msg
});

export const numberValidation = ({ regex = REGEX_NUMBER, msg = MSG_ERROR_NUMBER }) => ({
  pattern: regex,
  message: msg
});

export const maxNumberValidation = ({ regex = REGEX_NUMBER, msg = MSG_ERROR_MAX_NUMBER }) => ({
  pattern: regex,
  message: msg
});
