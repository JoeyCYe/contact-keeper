import axios from 'axios';

// Function to set global token in header

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;