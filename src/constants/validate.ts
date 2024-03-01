export const MSG_ERROR_STRING = 'Mục này không được bỏ trống';
export const MSG_ERROR_NUMBER = 'Mục này phải là một số lớn hơn 0';
export const MSG_ERROR_MAX_NUMBER = 'Không được nhập quá 1000';
export const MSG_ERROR_EMAIL = 'Email không đúng định dạng';
export const MGS_ERROR_EMAIL_REQUIRED = 'Vui lòng nhập tên tài khoản';
export const MSG_ERROR_PASSWORD_REQUIRED = 'Vui lòng nhập mật khẩu';
export const MSG_ERROR_SELECT_ONE_KEY = 'Bạn phải chọn ít nhất một giá trị';
export const MSG_ERROR_CONFIRM_PASSWORD_REQUIRED = 'Please enter the confirm password';
export const MSG_ERROR_PASSWORD_MIN_LENGTH = 'Password must be at least 8 characters';
export const MSG_ERROR_REGEX_PASSWORD =
  'Password must contain at least one special character, one lowercase character, one uppercase letter and one number';
export const MSG_PASSWORD_NOT_MATCH = 'Password does not match';
export const REGEX_PASSWORD =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
export const REGEX_IDENTITY_CARD = new RegExp(/^(\d{9}|\d{12})$/);
export const REGEX_PHONE_NUMBER = new RegExp(/(((\+|)84)|0|0084)(3|5|7|8|9)+([0-9]{8})\b/);
export const REGEX_NUMBER = new RegExp(/^\d+$/);
export const REGEX_USERNAME = new RegExp(/^[\w-.]+[\w-]{0,4}$/);
