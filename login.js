// PH -26.3 Add event listener navigate to another page

document.getElementById('submit-btn').addEventListener( 'click', function(){
    // addevent to emaail
    const emailfield=document.getElementById('user-email');
    const userEmail = emailfield.value;
    // add event to passard 
    const passwardField =document.getElementById('user-passward');
    const userPassward =passwardField.value;
    // set email & passward condition 
    if(userEmail =='mahtab@gmail.com' && userPassward == 'secret'){
        console.log('valid user');

        // navigate another page 
        window.location.href ='banking.html';
    }


})


