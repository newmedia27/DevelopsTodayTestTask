import axios from 'axios'

export const axiosClient = () => {
    const defaultOptions = {
        headers: {
            "Content-Type":"application/json",
        }
    }
    return {
        get: (url, options = {}) => axios.get(url, { ...options }),
        post: (url, data, options = {}) => axios.post(url, data, {...defaultOptions,...options }),
        put: (url, data, options = {}) => axios.put(url, data, { ...defaultOptions,...options }),
        delete: (url, options = {}) => axios.delete(url, { ...options }),
    };

}
