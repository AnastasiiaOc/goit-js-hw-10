
import flatpickr from "flatpickr";
import error from '../img/error.svg';
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const button = document.querySelector(`button[type="button"]`)
const input = document.querySelector(`input[type="text"]`)
const day = document.querySelector('[data-days]')
const hour = document.querySelector('[data-hours]')
const minute = document.querySelector('[data-minutes]')
const second = document.querySelector('[data-seconds]')

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0]; 
    // minDate: "today",
    validDate(userSelectedDate);
  },
};
flatpickr(`input[type="text"]`, options //find out more about this
)

function validDate(date) {
   const today = new Date();
  // console.log(today)
  const todaySecDate = Date.now();
  // console.log(todaySecDate)
    const usersDate = new Date(date); 
  // console.log(usersDate)
  const usersSecDate = usersDate.getTime();
  // console.log(usersSecDate)
  // console.log(userSelectedDate - todaySecDate);

 if (today >= usersDate) {
      button.disabled = true;
    iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        iconUrl: error
    })
 }
 else {    
    button.disabled = false;
 }
}

function formatTime({ days, hours, minutes, seconds }) {
  day.textContent = `${days}`.toString().padStart(2, "0");
  hour.textContent = `${hours}`.toString().padStart(2, "0");
  minute.textContent = `${minutes}`.toString().padStart(2, "0")
  second.textContent = `${seconds}`.toString().padStart(2, "0");
}

button.addEventListener('click', () => {
  input.disabled = true;
  button.disabled = true;
  // button.dataset.start = '';
  const idTimer = setInterval(() =>{
    const timerValue = userSelectedDate - Date.now();
    if (timerValue >= 0) {
      formatTime(convertMs(timerValue));
    } else {
      clearInterval(idTimer);
      input.disabled = false;
    }
  },1000)
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
