// utilityService.test.mjs

import { UtilityService } from "../../src/modules/core/utilityService.mjs";

test('constructUrl() takes string and returns valid url', () => {
  
  let username = `leehowardx`;
  let url = `https://api.github.com/search/commits\
?q=author:leehowardx&order=asc\
&sort=committer-date`;

  expect(UtilityService.constructUrl(username)).toBe(url);
});
