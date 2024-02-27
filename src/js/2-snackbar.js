
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formInfo = document.querySelector(".form");
formInfo.addEventListener("submit", onSubmit)



function onSubmit(event){
    event.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    //on accède a la forme aux valeurs de input
    const formData = new FormData(event.target);
    const delay = formData.get("delay");
    const state = formData.get("state");

    notification(delay, state);
    formInfo.reset();
    
}
 

function notification(delay, state) { 

return new Promise((resolve, reject) => {

 setTimeout(() => { 
     if (state ==="fulfilled") {
         //console.log(`✅ Fulfilled promise in ${delay}ms`)
         resolve(`✅ Fulfilled promise in ${delay * 1000}ms`);
     } else {
        // console.log(`❌ Rejected promise in ${delay}ms`)
         reject(`❌ Rejected promise in ${delay}ms`)
      }
    }, delay);
}).then(success => {
        iziToast.show({
            message: success,
            messageColor: '#FFFFFF',
            backgroundColor: '#59a10d',
            position: 'topRight',
            icon: ''
        });
    }).catch(error => {
        iziToast.show({
            message: error,
            messageColor: '#FFFFFF',
            backgroundColor: '#B51B1B',
            position: 'topRight',
            icon: ''
        });
    });
}

    
    
    // TURN DELAY IN MS!
    
    
    
// .then((success => {
//     iziToast.success({
// //     title: 'Hey',
// //     message: 'What would you like to add?'
// // });})
//     .catch((error) => {iziToast.error({
//     title: 'Error',
//     message: 'Illegal operation',
// }); });
// };




// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//     .catch(error => console.error(error));
// }



// <form class="form">
//   <label>
//     Delay (ms)
//     <input type="number" name="delay" required />
//   </label>

//   <fieldset>
//     <legend>State</legend>
//     <label>
//       <input type="radio" name="state" value="fulfilled" required />
//       Fulfilled
//     </label>
//     <label>
//       <input type="radio" name="state" value="rejected" required />
//       Rejected
//     </label>
//   </fieldset>


//   <button type="submit">Create notification</button>
// </form>

// 1; сабміту форми створює проміс.
//  В середині колбека цього промісу через вказану користувачем кількість мілісекунд проміс має виконуватися(при fulfilled) або відхилятися(при rejected), залежно від обраної опції в радіокнопках.Значенням промісу, яке передається як аргумент у методи resolve / reject, має бути значення затримки в мілісекундах.

// Створений проміс треба опрацювати у відповідних для вдалого/невдалого виконання методах.

// Якщо проміс виконується вдало, виводь у консоль наступний рядок, де delay — це значення затримки виклику промісу в мілісекундах.



// `✅ Fulfilled promise in ${delay}ms`



// Якщо проміс буде відхилено, то виводь у консоль наступний рядок, де delay — це значення затримки промісу в мілісекундах.

// `❌ Rejected promise in ${delay}ms`


