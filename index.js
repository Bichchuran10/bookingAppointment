const myForm = document.querySelector('#my-form');

let nameInput=document.getElementById('name')
let email=document.getElementById('mail')
let phone=document.getElementById('phone')
let appointment=document.getElementById('appointment')
myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault()
   
    //localStorage.setItem('name',nameInput.value)
    //localStorage.setItem('email',email.value)
    //localStorage.setItem('phone',phone.value)
    //localStorage.setItem('appointment',appointment.value)

    let userDetails={
         name: nameInput.value,
         email: email.value,
         phone: phone.value,
         appointment: appointment.value

    };

    let userDetails_str=JSON.stringify(userDetails)

    localStorage.setItem('user',userDetails_str)


    

  //reset the form
  document.querySelector('form').reset()

    //nameInput.value=""
    //email.value=""
   // phone.value=""
   // appointment.value=""


}