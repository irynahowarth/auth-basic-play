export const login = (credentials) => {
    if (credentials.email === 'user@user.com' && credentials.password === '123') {
      return { success: true, user: { name: 'Admin' } };
    } else {
      throw(
        { message: 'Invalid credetials'})
    }
  };  