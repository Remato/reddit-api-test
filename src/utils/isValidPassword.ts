export const isValidSimplePassword = (password?: string): boolean =>
  !!password && password.length >= 6 && password.length <= 20;
