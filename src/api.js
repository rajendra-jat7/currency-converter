import axios from "axios";

const API_KEY = "b9ee83c11451ce8ec95bd8b1"; // Get this from ExchangeRatesAPI

export const fetchLatestRates = async (baseCurrency) => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching latest rates:", error);
    return null;
  }
};

export const fetchHistoricalRates = async (baseCurrency, date) => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/history/${baseCurrency}/${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching historical rates:", error);
    return null;
  }
};
