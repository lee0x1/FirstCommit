// dataProvider.mjs

const getData = async (provider, url) => {
    const res = await provider(url);
    const data = await res.json();
    console.log(data);
    return data;
}

export const dataProvider = {
    getData: getData,
}
