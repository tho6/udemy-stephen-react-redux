import axios from 'axios';

// // another approach then the below using axios.create()
// const searchImage = term => {

// }

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID nzK6w1lwVdQrijdp7IBSSEMxrLrhst4yByFa5URskQY'
    }
});