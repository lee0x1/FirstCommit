// utilityService.test.mjs

import { Utils } from "../../src/modules/core/utils.mjs";

test("constructUrl() takes string and returns valid url", () => {
    let username = `leegibsonhoward`;
    let url = `https://api.github.com/search/commits\
?q=author:leegibsonhoward&order=asc\
&sort=committer-date`;

    expect(Utils.constructUrl(username)).toBe(url);
});
