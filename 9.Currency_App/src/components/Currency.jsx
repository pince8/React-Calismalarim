import React from 'react'
import '../css/currency.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
function Currency() {


    let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

    let API_KEY = "fca_live_ELIYTG3hPoRFVNs4Lyf0Uqa6fm8tvTPewHYm0hsr";
    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState("AUD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        // console.log(amount)
        // console.log(fromCurrency)
        // console.log(toCurrency)

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        console.log(response.data.data);
        setResult(result);

    }

    return (
        <div className="currency-div">
            <div>
                <h3 style={{ marginTop: '-20px' }}>DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" className="amount" />
                <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
                    <option value="USD">AUD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <FaArrowCircleRight style={{ fontSize: '25px', marginRight: '10px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
                    <option value="USD">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">AUD</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className="result" />
            </div>
            <div>
                <button
                    onClick={exchange}
                    className="exchange-button">Çevir</button>
            </div>
        </div>
    )
}

export default Currency