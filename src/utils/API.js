import axios from 'axios';

const queryURL = "https://randomuser.me/api/?results=100&inc=picture,name,phone,email&nat=us";


export default {
    search: function () {
        return axios.get(queryURL);
    },
};
