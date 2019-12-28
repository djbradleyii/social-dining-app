import React from 'react'

const ContextManager = React.createContext({
    loggedInUserData: {},
    events: [],
    selectedEvent: {},
    getAllUsers: () => {},
    deleteUser: () => {},
    getAllEvents: () => {},
    editEvent: () => {},
    handleRegistrationSuccess: () => {}
})

export default ContextManager