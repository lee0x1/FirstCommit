// utilityService.test.mjs

import { Utils } from "../../src/modules/core/utils.mjs";

test("constructUrl() takes string and returns valid url", () => {
    let username = `lee0x1`;
    let url = `https://api.github.com/search/commits\
?q=author:lee0x1&order=asc\
&sort=committer-date`;

    expect(Utils.constructUrl(username)).toBe(url);
});
