import { API_HOST } from './env.js';

const convertStringToNumber = async (obj) => {
    return new Promise((resolve) => {
        for (let key in obj) {
            if (typeof obj[key] === 'string' && /^\d+$/.test(obj[key])) {
                obj[key] = parseInt(obj[key]);
            }
        }
        resolve(obj);
    });
};

export const fetchAndUpdateData = async (endpoint, store, first = false) => {
    store.update((prev) => ({ ...prev }));

    try {
        const data = await fetchData(endpoint, {
            _convertStringToNumber: true, _first: first
        });
        store.set({ ...data, loading: false });
    } catch (error) {
        setTimeout(() => fetchAndUpdateData(endpoint, store), 1e3);
    }
}

export const fetchData = async (endpoint, options = {}) => {
    const { domain = API_HOST, _convertStringToNumber = false, _first = false } = options;

    try {
        const res = await fetch(`${domain}${endpoint}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await res.json();
        if (!data.ok) {
            throw new Error('Server response was not ok');
        }

        data = _first ? data?.data[0] : data.data;
        if (_convertStringToNumber) {
            data = await convertStringToNumber(data);
        }

        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};
