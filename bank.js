// PH 26-6 Get User deposit and set deposit total value
// handle deposite button handle 
document.getElementById('deposite-btn').addEventListener('click',function(){
    

    const deposite =depositeInput.value;
    
    const depositeAmount = document.getElementById('deposite-total');
    depositeAmount.innerText =deposite;

    // clear deposite input field 
    depositeInput.value ='';

    // 26-7 Update deposit and balance and handle string add

const previousDepositeAmount =depositeAmount.innerText;
const newDepositeAmount = parseFloat(previousDepositeAmount) +deposite;
depositeAmount.innerText =newDepositeAmount;
})


// 26-8 Money withdraw and reduce balance for withdraw
// handle event withdraw 


