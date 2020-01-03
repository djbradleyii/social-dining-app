import React from 'react'

const ContextManager = React.createContext({
    loggedInUserData: {},
    events: [],
    selectedEvent: {},
    errorMessage: null,
    getAllUsers: () => {},
    deleteUser: () => {},
    getAllEvents: () => {},
    editEvent: () => {},
    updateError: null,
    handleRegistrationSuccess: () => {},
    scrollToErrorMessage: () => {},
})

export default ContextManager