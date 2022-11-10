const myForm = document.querySelector('#my-form');


myForm.addEventListener('submit', onSubmit);
//let users=[]
function onSubmit(e)
{
    e.preventDefault()
   
    //localStorage.setItem('name',nameInput.value)
    //localStorage.setItem('email',email.value)
    //localStorage.setItem('phone',phone.value)
    //localStorage.setItem('appointment',appointment.value)
    let nameInput=document.getElementById('name').value
    let email=document.getElementById('mail').value
    let phone=document.getElementById('phone').value
    let appointment=document.getElementById('appointment').value
   

    let users={
         Name: nameInput,
         Email: email,
         Phone: phone,
         Appointment: appointment

    };
//setting email id of the user as key
    localStorage.setItem(email,JSON.stringify(users))
     
    //to display below the form

    //storing the initial object as a object from localStorage by JSON.parse()
   let reconverted = JSON.parse(localStorage.getItem(email))

   //creating li
   let li=document.createElement('li')
   //initializing the inner content of li
   li.innerHTML= (`${reconverted.Name} ,${reconverted.Email},${reconverted.Phone}, ${reconverted.Appointment}`);
   li.style.color="black"
   

   let ul=document.getElementById('listofpeople')
   //storing li in the ul parent class
   ul.appendChild(li)


  //reset the form
  document.querySelector('form').reset()

   

   


}


