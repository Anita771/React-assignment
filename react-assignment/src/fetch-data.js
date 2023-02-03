const ENDPOINT_URL = "https://restcountries.com/v3.1/all";
export const fetchCountryData = async () => {
	const response = await fetch(ENDPOINT_URL);
	return await response.json();
};
