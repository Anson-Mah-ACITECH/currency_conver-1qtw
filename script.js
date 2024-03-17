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
    'TOP': 0.64, 
    'USD': 1.52, 
    'VUV': 0.013, 
    'WST': 0.55, 
    'XPF': 0.014,
  }
}

const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const currency_top = document.getElementById('currency_top');
const currency_bottom = document.getElementById('currency_bottom');

value1.addEventListener('input', convert);
value2.addEventListener('input', convert);
currency_top.addEventListener('input', convert);
currency_bottom.addEventListener('input', convert);
currency_top.addEventListener('input', change_symbol);
currency_bottom.addEventListener('input', change_symbol);

function swap() {
  let currency_top_value = document.getElementById('currency_top').value;
  let currency_bottom_value = document.getElementById('currency_bottom').value;
  document.getElementById('currency_top').value = currency_bottom_value;
  document.getElementById('currency_bottom').value = currency_top_value;
  convert();
  change_symbol();
}

function convert() {
  let value_top = document.getElementById('value1').value;
  let currency_top_value = document.getElementById('currency_top').value;
  let currency_bottom_value = document.getElementById('currency_bottom').value;
  let placeholder_value = value_top*exchange_rates['XXX to AUD'][currency_top_value];
  let placeholder_value_2 = placeholder_value*exchange_rates['AUD to XXX'][currency_bottom_value];
  let new_bottom_value = Math.round(placeholder_value_2*100)/100;
  document.getElementById('value2').value = new_bottom_value;
}

function change_symbol() {
  let currency_top_value = document.getElementById('currency_top').value;
  let currency_bottom_value = document.getElementById('currency_bottom').value;

  if (currency_top_value == "AUD" || currency_top_value == 'NZD' || currency_top_value == 'SBD' || currency_top_value == 'USD' || currency_top_value == 'WST') {
    document.getElementById('currency_symbol_top').innerHTML = '$';
  } else if (currency_top_value == "FJD") {
    document.getElementById('currency_symbol_top').innerHTML = 'F$';
  } else if (currency_top_value == 'PGK') {
    document.getElementById('currency_symbol_top').innerHTML = 'K';
  } else if (currency_top_value == 'TOP') {
    document.getElementById('currency_symbol_top').innerHTML = 'T$';
  } else if (currency_top_value == 'VUV') {
    document.getElementById('currency_symbol_top').innerHTML = 'VT';
  } else {
    document.getElementById('currency_symbol_top').innerHTML = 'F';
  }

  if (currency_bottom_value == 'AUD' || currency_bottom_value == 'NZD' || currency_bottom_value == 'SBD' || currency_bottom_value == 'USD' || currency_bottom_value == 'WST') {
    document.getElementById('currency_symbol_bottom').innerHTML = '$';
  } else if (currency_bottom_value == 'FJD') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'F$';
  } else if (currency_bottom_value == 'PGK') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'K';
  } else if (currency_bottom_value == 'TOP') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'T$';
  } else if (currency_bottom_value == 'VUV') {
    document.getElementById('currency_symbol_bottom').innerHTML = 'VT';
  } else {
    document.getElementById('currency_symbol_bottom').innerHTML = 'F';
  }
}