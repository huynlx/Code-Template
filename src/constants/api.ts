export enum AXIOS_REQUEST_METHOD {
  POST = 'post',
  GET = 'get',
  PATCH = 'patch',
  PUT = 'put',
  DELETE = 'delete'
}

export enum RESPONSE_STATUS_AUTHOR {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403
}

export const AXIOS_CONFIGS = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  responseType: 'json'
};

export const RESPONSE_STATUS_CODE = {
  SUCCESS: [200, 201, 304],
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  BAD_GATEWAY: 502,
  HTTP_TOO_MANY_REQUESTS: 429,
  HTTP_CONFLICT: 409,
  HTTP_UN_PROCESSABLE_ENTITY: 422
};

export const RESPONSE_STATUS_CODE_PASSED = RESPONSE_STATUS_CODE.SUCCESS;
