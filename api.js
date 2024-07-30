
// import axios from "axios";
import axios from "axios";

export const geocodeAddress = async (address) => {
  const API_URL = "https://geocode.search.hereapi.com/v1/geocode";
  const API_KEY = "FOw4SxMjWh68r0G0LIjGeQcpobgdPm10Hf0pOuKvlKs";
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: address,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (e) {
    console.log("Error geocoding address: ", e);
    throw e;
  }
};
