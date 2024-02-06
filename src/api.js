const BASE_API_URL = 'https://clicker-api.joincommunity.xyz';

const convertStringToNumber = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'string' && /^\d+$/.test(obj[key])) {
            obj[key] = parseInt(obj[key]);
        }
    }
    return obj;
};

export const fetchData = async (endpoint, options = {}) => {
    const { domain = BASE_API_URL, _convertStringToNumber = false } = options;

    try {
        const res = await fetch(`${domain}${endpoint}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await res.json();
        if (!data.ok) {
            throw new Error('Server response was not ok');
        }

        data = data.data;
        if (_convertStringToNumber) {
            data = convertStringToNumber(data);
        }

        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};
