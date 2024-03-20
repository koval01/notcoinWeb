interface DataObject {
    [key: string]: string | number | boolean | null | undefined | DataObject;
}

const convertStringToNumber = async (obj: DataObject): Promise<DataObject> => {
    return new Promise((resolve) => {
        for (let key in obj) {
            if (typeof obj[key] === 'string' && /^\d+$/.test(obj[key] as string)) {
                obj[key] = parseInt(obj[key] as string);
            }
        }
        resolve(obj);
    });
};

export const fetchAndUpdateData = async (endpoint: string, store: any, first = false): Promise<void> => {
    store.update((prev: any) => ({ ...prev }));

    try {
        const data = await fetchData(endpoint, {
            _convertStringToNumber: true, _first: first
        });
        store.set({ ...data, loading: false });
    } catch (error) {
        setTimeout(() => fetchAndUpdateData(endpoint, store), 1e3);
    }
}

export const fetchData = async (
    endpoint: string, options: { domain?: string, _convertStringToNumber?: boolean, _first?: boolean } = {}
): Promise<DataObject> => {
    const { domain = import.meta.env.VITE_API_HOST, _convertStringToNumber = false, _first = false } = options;

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
