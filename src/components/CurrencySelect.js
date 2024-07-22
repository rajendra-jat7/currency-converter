import React from "react";

const CurrencySelect = ({ selectedCurrency, handleCurrencyChange }) => {
  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "SEK",
    "NZD",
    "MXN",
    "SGD",
    "HKD",
    "NOK",
    "KRW",
    "TRY",
    "RUB",
    "INR",
    "BRL",
    "ZAR",
    "PHP",
    "PLN",
    "DKK",
    "IDR",
    "HUF",
    "CZK",
    "ILS",
    "CLP",
    "PKR",
    "THB",
    "MYR",
    "RON",
  ];

  return (
    <select
      value={selectedCurrency}
      onChange={(e) => handleCurrencyChange(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;
