import React from 'react'

const ContextManager = React.createContext({
    users: [],
    events: [],
    attendees: [],
    getAllUsers: () => {},
    addUser: () => {},
    editUser: () => {},
    deleteUser: () => {},
    getAllEvents: () => {},
    addEvent: () => {},
    editEvent: () => {},
    deleteEvent: () => {},
    getAllAttendees: () => {},
    addAttendee: () => {},
    deleteAttendee: () => {},
    handleRegistrationSuccess: () => {}
})

export default ContextManager