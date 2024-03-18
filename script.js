// Name: Anson Mah
// Date: 15 March, 2024

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
    'TOP': 0.64, 
    'USD': 1.52, 
    'VUV': 0.013, 
    'WST': 0.55, 
    'XPF': 0.014,
  }
}

input_value_top.addEventListener('input', convert);
input_value_bottom.addEventListener('input', convert);
selected_currency_top.addEventListener('input', convert);
selected_currency_bottom.addEventListener('input', convert);
selected_currency_top.addEventListener('input', change_symbol);
selected_currency_bottom.addEventListener('input', change_symbol);

function swap() {
  let selected_currency_top = document.getElementById('selected_currency_top').value;
  let selected_currency_bottom = document.getElementById('selected_currency_bottom').value;
  document.getElementById('selected_currency_top').value = selected_currency_bottom;
  document.getElementById('selected_currency_bottom').value = selected_currency_top;
  convert();
  change_symbol();
}

function convert() {
  let input_value_top = document.getElementById('input_value_top').value;
  let selected_currency_top = document.getElementById('selected_currency_top').value;
  let selected_currency_bottom = document.getElementById('selected_currency_bottom').value;
  let placeholder_value = input_value_top*exchange_rates['XXX to AUD'][selected_currency_top];
  let placeholder_value_2 = placeholder_value*exchange_rates['AUD to XXX'][selected_currency_bottom];
  let new_bottom_value = Math.round(placeholder_value_2*100)/100;
  document.getElementById('input_value_bottom').value = new_bottom_value;
}

function change_symbol() {
  let selected_currency_top = document.getElementById('selected_currency_top').value;
  let selected_currency_bottom = document.getElementById('selected_currency_bottom').value;

  if (selected_currency_top == "AUD" || selected_currency_top == 'NZD' || selected_currency_top == 'SBD' || selected_currency_top == 'USD' || selected_currency_top == 'WST') {
    document.getElementById('currency_symbol_top').innerHTML = '$';
  } else if (selected_currency_top == "FJD") {
    document.getElementById('currency_symbol_top').innerHTML = 'F$';
  } else if (selected_currency_top == 'PGK') {
    document.getElementById('currency_symbol_top').innerHTML = 'K';
  } else if (selected_currency_top == 'TOP') {
    document.getElementById('currency_symbol_top').innerHTML = 'T$';
  } else if (selected_currency_top == 'VUV') {
    document.getElementById('currency_symbol_top').innerHTML = 'VT';
  } else {
    document.getElementById('currency_symbol_top').innerHTML = 'F';
  }

  if (selected_currency_bottom == 'AUD' || selected_currency_bottom == 'NZD' || selected_currency_bottom == 'SBD' || selected_currency_bottom == 'USD' || selected_currency_bottom == 'WST') {
    document.getElementById('currency_symbol_bottom').innerHTML = '$';
  } else if (selected_currency_bottom == 'FJD') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'F$';
  } else if (selected_currency_bottom == 'PGK') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'K';
  } else if (selected_currency_bottom == 'TOP') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'T$';
  } else if (selected_currency_bottom == 'VUV') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'VT';
  } else {
    document.getElementById('currency_symbol_bottom').innerHTML = 'F';
  }
}