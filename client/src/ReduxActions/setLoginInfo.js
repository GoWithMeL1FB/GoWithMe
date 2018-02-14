export const setLoginInfo = data => {
  return {
    type: 'SAVE_LOGIN_INFO',
    payload: data,
  };
}