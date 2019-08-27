import userAction from './user.type';

export const setCurrentUser = user => ({
    type: userAction.SET_CURRENT_USER,
    newUser: user
  });