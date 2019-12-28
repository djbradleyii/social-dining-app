const ActiveUserService = {
  saveUserData(userData) {
    window.localStorage.setItem('activeUser', JSON.stringify(userData))
  },
  getUserData() {
    const userData = window.localStorage.getItem('activeUser');
    return JSON.parse(userData)
  },
  clearUserData() {
    window.localStorage.removeItem('activeUser')
  },
  hasUserData() {
    return !!ActiveUserService.getUserData()
  }
}

export default ActiveUserService