import React from 'react';

const ContextManager = React.createContext({
  loggedInUserData: {},
  events: [],
  selectedEvent: {},
  errorMessage: null,
  loadingMessage: null,
  getAllUsers: () => {},
  getAllEvents: () => {},
  updateError: null,
  scrollToErrorMessage: () => {},
  clearErrorMessage: () => {},
  updateLoadingMessage: () => {},
  clearLoadingMessage: () => {}
});

export default ContextManager;
