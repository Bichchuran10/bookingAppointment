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

    let ul=document.getElementById('listofpeople')
   

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

      //For Editing User
      let editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.innerHTML = 'EDIT';
      editBtn.style.color="#f4f4f4"
      editBtn.style.backgroundColor="grey"
      editBtn.addEventListener("click" , editThisKey);

       //For Deleting User
       let deleteBtn = document.createElement('button');
       deleteBtn.type = 'button' ;
       deleteBtn.innerHTML = 'DELETE' ; 
       deleteBtn.style.color="#f4f4f4"
       deleteBtn.style.backgroundColor="red"
       deleteBtn.addEventListener("click", deleteThisKey);

       

        //Now Appending Everyting at their repective place
        ul.appendChild(li);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        function editThisKey() {
            //Showing User Details on respective input field so that user can directly edit there. 
            document.getElementById('name').value=nameInput
            document.getElementById('mail').value=email
            document.getElementById('phone').value=phone
            document.getElementById('appointment').value=appointment

        }
        function deleteThisKey(email) {
            localStorage.removeItem(email);
            ul.removeChild(li);
         }

           //reset the form
         document.querySelector('form').reset()

}

//Now Delete the user detail so that when he click on submit button a new details get stored
 //deleteThisKey();








