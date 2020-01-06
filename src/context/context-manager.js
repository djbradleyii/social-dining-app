import React from 'react'

const ContextManager = React.createContext({
    loggedInUserData: {},
    events: [],
    selectedEvent: {},
    errorMessage: null,
    getAllUsers: () => {},
    getAllEvents: () => {},
    updateError: null,
    scrollToErrorMessage: () => {},
})

export default ContextManager