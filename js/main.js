document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#form').onsubmit = () => {
    const currency = document.querySelector('#currency').value;
    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`)
    .then(response => response.json())
    .then(data => {
      const contents = `1 USD is equal to ${data.rates[currency]} ${currency}`
      document.querySelector('#result').innerHTML = contents;
      const info = `Exchange rates published by the <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">European Central Bank</a>.`;
      document.querySelector('#info').innerHTML = info;
    })
    .catch(() => {
      document.querySelector('#result').innerHTML = 'There was an error.';
    });
    return false;
  };
});
