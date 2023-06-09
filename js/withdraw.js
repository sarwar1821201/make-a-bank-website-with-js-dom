

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField= document.getElementById('withdraw-filed');
    const newWithdrawAmountString= withdrawField.value;
    const newWithdrawAmount= parseFloat(newWithdrawAmountString);


   const withdrawTotalElement= document.getElementById('withdraw-total');
   const previousWithdrawTotalString= withdrawTotalElement.innerText;
   const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);

   const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
   withdrawTotalElement.innerText=currentWithdrawTotal;


   
   // get current balance

   const balanceTotalElement= document.getElementById('balance-total');
   const previousBalanceTotalString= balanceTotalElement.innerText;
   const previousBalanceTotal= parseFloat(previousBalanceTotalString);

   withdrawField.value='';

   if(newWithdrawAmount>previousBalanceTotal){
     alert('you have no sufficient money');
     return;
   }

   const currentBalanceTotal= previousBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText=currentBalanceTotal;


   

   
})