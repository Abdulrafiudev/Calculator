let calculation = localStorage.getItem(`update_score`) || ``;

document.querySelector(`.js_paragraph`).innerHTML = calculation;


function update_calculation(symbol){
  calculation = calculation + `${symbol}`;
  document.querySelector(`.js_paragraph`).innerHTML = calculation;
  localStorage.setItem(`update_score`, calculation)
  return calculation;

}
