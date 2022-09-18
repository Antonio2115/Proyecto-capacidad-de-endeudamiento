//Seleccion de valores en el HTML
const income = document.querySelector('#income');
const expense = document.querySelector('#expense');
const saving = document.querySelector('#saving');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector("#indebtedness");

btn.addEventListener('click',borrowingCapacity);

function borrowingCapacity (){
    let incomeValue = parseInt(income.value);
    let expenseValue = parseInt(expense.value);
    let savingValue = parseInt(saving.value);
    //Validacion de valores 
    if(!incomeValue || incomeValue<0){
        incomeValue = 0;
        income.value = 0;
    }
    if(!expenseValue || incomeValue<0){
        expenseValue = 0;
        expense.value = 0;
    }
    if(!savingValue || incomeValue<0){
        savingValue = 0;
        saving.value = 0;
    }

    console.log ({
        incomeValue,
        expenseValue,
        savingValue
    });

    let Result = Math.round((incomeValue - (expenseValue + savingValue)) * 0.4);
    

    //Validacion si el resultado es inferior a 0 o mayor a 1
    if(Result>0){
        pResult.style.color = 'black';
        pResult.innerText = '$' + Result;
    }
    else {
        pResult.style.color = 'red';
        pResult.innerText = 'Tus gastos son muy altos no puedes endeudarte';
    }
    
}

 