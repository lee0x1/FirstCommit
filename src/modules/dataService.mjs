// dataService.mjs

const getData = async (provider, url) => {
    const res = await provider(url);
    const data = await res.json();
    return data;
}
export const DataService = {
    getData: getData,
}