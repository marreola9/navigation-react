const BASE_URL = "https://www.swapi.tech/api";

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
