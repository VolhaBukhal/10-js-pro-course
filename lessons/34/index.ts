let currencyEl = document.querySelector('#currency') as HTMLSelectElement;
let currentCarrencyEls = document.querySelectorAll('.current-carrency');
let monthSalaryEl = document.querySelector('#month') as HTMLInputElement;
let vacationDurationEl = document.querySelector('#vacation') as HTMLInputElement;
let workingDayEl = document.querySelector('#working-week') as HTMLSelectElement;
let workinTimeEl = document.querySelector('#working-time') as HTMLSelectElement;

//output elements
let outputSpans: NodeListOf<Element> = document.querySelectorAll('.result-item span.out');
let yearSalaryEl = document.querySelector('#in-year');
let vacationSalaryEl = document.querySelector('#in-vacation');
let weekSalaryEl = document.querySelector('#in-week');
let daySalaryEl = document.querySelector('#in-day');
let hourSalaryEl = document.querySelector('#in-hour');
let minuteSalaryEl = document.querySelector('#in-minute');
let secondSalaryEl = document.querySelector('#in-second');


enum Time {
  Year = 'in-year',
  Vacation = 'in-vacation',
  Week = 'in-week',
  Day = 'in-day',
  Hour = 'in-hour',
  Minute = 'in-minute',
  Second = 'in-second',
};
console.log(Time);

//update text of currency
const updateCurrencyText = () => {
  let currentCurancyText = currencyEl.options[currencyEl.selectedIndex].text;
  currentCarrencyEls.forEach(el => el.textContent = currentCurancyText);
}
currencyEl.addEventListener('change', updateCurrencyText);

const countSalary = ( time: Time | string ): number => {
  let inDay: number = +monthSalaryEl.value / (+workingDayEl.value * 4);
  let inHour: number = inDay / +workinTimeEl.value;
 
  if (time === Time.Year) {
   return +monthSalaryEl.value * 12;
  }
  if (time === Time.Vacation) {
    return Math.round(inDay * +vacationDurationEl.value);
  }
  if (time === Time.Week) {
    return Math.round(+monthSalaryEl.value / 4);
  }
  if (time === Time.Day) {
    return  Math.round(inDay);
  }
  if (time === Time.Hour) {
    return Math.round(inHour *100) / 100;
  }
  if (time === Time.Minute) {
    return Math.round((inHour / 60) * 1000) / 1000;
  }
  if (time === Time.Second) {
    return Math.round((inHour / 3600) * 1000) / 1000;
  }
  else {
    return 0
  }
}

//rende all fields
const rendeDate = ()=> {
  outputSpans.forEach(item => item.textContent = countSalary(item.id).toString());
}

// count immediately after render DOM
document.addEventListener('DOMContentLoaded', rendeDate);

//update data in case of any input changed
//get all inputs which can be changed;
let counts = document.querySelectorAll('[data-count]');
counts.forEach(item => item.addEventListener('input', rendeDate));


/* //update data for seconds every second
let inSecond = countSalary('in-second');
let seconds = 0;
monthSalaryEl.addEventListener('input', () => {
  inSecond = countSalary('in-second');
}); */

let inSecond = countSalary('in-second');
let seconds = 0;
counts.forEach(item => item.addEventListener('input', ()=> {
  inSecond = countSalary('in-second');
  seconds = 0;
  console.log('input is changed');
}))
  
let int = setInterval( () => {
  seconds += inSecond;
  console.log('inSecond: ', inSecond);
  console.log('seconds ', seconds);
  secondSalaryEl.textContent = seconds.toFixed(3);
}, 1000);


