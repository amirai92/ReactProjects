//async & await & Promise.all

const base = `EUR`;
const currencies = [
  "AUD",
  "ILS",
  "GBP",
  "NZD",
  "CAD",
  "JPY",
  "INR",
  "PLN",
  "SEK",
  "HUF",
  "MXN"
];

async function getRate(base, currency) {
  try {
    const base_url = `https://api.exchangeratesapi.io/latest`;
    const url = `${base_url}?base=${base}&symbols=${currency}`;

    const json = await (await fetch(url)).json();
    if (json.rates[currency]) {
      return json.rates[currency];
    }
  } catch (err) {
    throw err;
  }
}

// Sequence execution
async function initSequence() {
  try {
    for (const cur of currencies) {
      let newRate = await getRate(base, cur);
      console.log(`1 ${base} = ${newRate} ${cur}`);
    }
  } catch (error) {
    console.log("Error getting currency value", error);
  }
}
initSequence();

// parallel execution
const Promise = require("bluebird");

async function initParallel() {
  try {
    const allCurrencies = await Promise.all(currencies, base).map((cur) =>
      getRate(base, cur)
    );
    allCurrencies.forEach((element, i) => {
      console.log(`1 ${base} = ${element} ${currencies[i]}`);
    });
  } catch (error) {
    console.log("Error getting currency value", error);
  }
}
initParallel();
