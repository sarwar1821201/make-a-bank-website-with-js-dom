
//add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //console.log('button clicked')
   
    //get the email address inside the email input field
    const emailFiled= document.getElementById('user-email');
    const email= emailFiled.value;
    //console.log(email)

   const passwordField=document.getElementById('user-password')
   const password= passwordField.value;
  // console.log(password)
  if(email==='hello@gmail.com' && password==='123456'){
    // console.log('yes')
    window.location.href='bank.html';
  }
  else{
    alert('invaild user');
  }
})