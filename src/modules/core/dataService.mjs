// dataService.mjs

const getData = async (provider, url) => {
    try {
        const res = await provider(url);
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const DataService = {
    getData: getData,
}