// PH 26-6 Get User deposit and set deposit total value
// handle deposite button handle 
document.getElementById('deposite-btn').addEventListener('click',function(){
    // console.log('hello')

    const deposite =depositeInput.value;
    // console.log(deposite)
    const depositeAmount = document.getElementById('deposite-total');
    depositeAmount.innerText =deposite;

    // clear deposite input field 
    depositeInput.value ='';
})
