//Seleccion de valores en el HTML
const income = document.querySelector('#income');
const expense = document.querySelector('#expense');
const saving = document.querySelector('#saving');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector("#indebtedness");

btn.addEventListener('click',borrowingCapacity);

function borrowingCapacity (){
    const incomeValue = parseInt(income.value);
    const expenseValue = parseInt(expense.value);
    const savingValue = parseInt(saving.value);
    const Result = Math.round((incomeValue - (expenseValue + savingValue)) * 0.4);
    if(Result>0){
        pResult.style.color = 'black';
        pResult.innerText = '$' + Result;
    }
    else {
        pResult.style.color = 'red';
        pResult.innerText = 'Tus gastos son muy altos no puedes endeudarte';
    }
    
}

 