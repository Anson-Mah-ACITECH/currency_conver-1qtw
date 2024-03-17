// Name: Anson Mah
// Date: 14 March, 2024 (π Day)

// Sets the exchange rates for the currencies
const exchange_rates = {
  'AUD to XXX': {
    'AUD': 1.00,
    'FJD': 1.47, 
    'NZD': 1.08, 
    'PGK': 2.52, 
    'SBD': 5.53,
    'TOP': 1.55, 
    'USD': 0.66, 
    'VUV': 78.45, 
    'WST': 1.80, 
    'XPF': 72.04,
  }, 
  'XXX to AUD': {
    'AUD': 1.00,
    'FJD': 0.68, 
    'NZD': 0.93, 
    'PGK': 0.40, 
    'SBD': 0.18,
    'TOP': 0.65, 
    'USD': 1.51, 
    'VUV': 0.01, 
    'WST': 0.55, 
    'XPF': 0.01,
  }
}

const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const currency_top = document.getElementById('currency_top');
const currency_bottom = document.getElementById('currency_bottom');

function swap() {
  let currency_top_value = document.getElementById('currency_top').value;
  let currency_bottom_value = document.getElementById('currency_bottom').value;
  document.getElementById('currency_top').value = currency_bottom_value;
  document.getElementById('currency_bottom').value = currency_top_value;
  convert();
}

value1.addEventListener('input', convert);
value2.addEventListener('input', convert);
currency_top.addEventListener('input', convert);
currency_bottom.addEventListener('input', convert);

function convert() {
  let value_top = document.getElementById('value1').value;
  let currency_top_value = document.getElementById('currency_top').value;
  let currency_bottom_value = document.getElementById('currency_bottom').value;
  let placeholder_value = value_top*exchange_rates['XXX to AUD'][currency_top_value]
  let placeholder_value_2 = placeholder_value*exchange_rates['AUD to XXX'][currency_bottom_value]
  let new_bottom_value = Math.round(placeholder_value_2*100)/100;
  document.getElementById('value2').value = new_bottom_value;
}