/* eslint-disable import/prefer-default-export */
export const BASE_URL = process.env.NODE_ENV === 'production'
  ? process.env.BASE_URL
  : `http://localhost:${process.env.PORT}`;
