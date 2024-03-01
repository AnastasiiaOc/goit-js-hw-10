
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
         resolve(`✅ Fulfilled promise in ${delay}ms`);
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

    
    
    