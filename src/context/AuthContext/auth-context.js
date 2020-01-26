import React from 'react';

export default React.createContext({
    isLoggedIn: false,
    login: (email, password) => { console.log('nothing happened') },
    logout: () => { console.log('nothing happened') }
});