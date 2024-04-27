const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies", async (req, res) => {
    const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=1b3feb8bd55b4812a975533a8b373190";

    try {
        const nameResponse = await axios.get(nameURL);
        const nameData = nameResponse.data;

        return res.json(nameData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get currencies' });
    }
});

app.get("/convert", async (req, res) => {
    const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } = req.query;

    try {
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=1b3feb8bd55b4812a975533a8b373190`;
        
        const response = await axios.get(dataUrl);
        const exchangeRates = response.data.rates;

        // Calculate the amount in the target currency
        const sourceRate = exchangeRates[sourceCurrency];
        const targetRate = exchangeRates[targetCurrency];
        const targetAmount = (amountInSourceCurrency / sourceRate) * targetRate;

        return res.json(targetAmount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to convert currency' });
    }
});

app.listen(5000, () => {
    console.log("server start")
});
