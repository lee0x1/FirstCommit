// utilityService.mjs

  const constructUrl = (username) => {
    const base = `https://api.github.com/search/commits`;
    const author = `?q=author:${username}`;
    const sortOrder = `&order=asc&sort=committer-date`;

    const url =  base + author + sortOrder;
    return url;
  };
  
export const UtilityService = {
  constructUrl: constructUrl,
}
