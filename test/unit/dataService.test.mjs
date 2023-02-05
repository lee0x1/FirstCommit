// src/utils/currency.test.js
import { DataService } from "../../src/modules/core/dataService.mjs";
import { expect, jest, test } from "@jest/globals";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ items: {} }),
    })
);

let url;

beforeEach(() => {
    fetch.mockClear();
    url = `https://api.github.com/search/commits\
?q=author:leehowardx&order=asc\
&sort=committer-date`;
});

it("fetches users commits", async () => {
    const data = await DataService.getData(fetch, url);

    expect(data).toEqual({ items: {} });
    expect(fetch).toHaveBeenCalledTimes(1);
});

it("returns error message when exception", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Error fetching data"));

    const data = await DataService.getData(fetch, url);

    expect(data).toEqual(`Error fetching data`);
    expect(fetch).toHaveBeenCalledWith(url);
});
