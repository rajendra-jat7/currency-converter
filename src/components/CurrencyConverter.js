import React, { useState, useEffect } from "react";
import { fetchLatestRates, fetchHistoricalRates } from "../api";
import CurrencySelect from "./CurrencySelect";
import DateSelector from "./DateSelector";
import moment from "moment";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [rate, setRate] = useState(null);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchLatestRates(baseCurrency);
      if (data && data.conversion_rates) {
        setRate(data.conversion_rates[targetCurrency]);
      }
    };
    getRates();
  }, [baseCurrency, targetCurrency]); // Ensure both baseCurrency and targetCurrency are in the dependencies array

  useEffect(() => {
    const getHistoricalRates = async () => {
      const data = await fetchHistoricalRates(baseCurrency, date);
      if (data && data.conversion_rates) {
        setRate(data.conversion_rates[targetCurrency]);
      }
    };
    getHistoricalRates();
  }, [date, baseCurrency, targetCurrency]); // Ensure both baseCurrency and targetCurrency are in the dependencies array

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvertClick = () => {
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
      setHighlight(true);
      setTimeout(() => setHighlight(false), 2000);
    }
  };

  return (
    <div className="converter">
      <h1>Currency Converter</h1>
      <div className="form-group">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Amount"
        />
      </div>
      <div className="form-group">
        <CurrencySelect
          selectedCurrency={baseCurrency}
          handleCurrencyChange={setBaseCurrency}
        />
      </div>
      <div className="form-group">
        <CurrencySelect
          selectedCurrency={targetCurrency}
          handleCurrencyChange={setTargetCurrency}
        />
      </div>
      <div className="form-group">
        <DateSelector date={date} handleDateChange={setDate} />
      </div>
      <div className="form-group">
        <button onClick={handleConvertClick}>Convert</button>
      </div>
      {convertedAmount !== null && (
        <div className={`result ${highlight ? "highlight" : ""}`}>
          <h2>
            {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
