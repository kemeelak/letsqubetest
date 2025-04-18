/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
const emailRegex=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const isEmailValid = (email: string) => emailRegex.test(email.trim());
