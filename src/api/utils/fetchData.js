/**
 * Fetching data from current url
 * @param {string} url 
 * @returns {Object}
 */
export const fetchData = async url => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
};
