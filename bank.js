function bankTransection(transectionButtonId, userTransectionFieldId, transectionStatusHoldingId, isAdd){
    document.getElementById(transectionButtonId).addEventListener('click', function(){
        // debugger;
        // getting new value from the input fields
        const userTransectionAmount = parseFloat(document.getElementById(userTransectionFieldId).value);
        
        // getting value of current deposit and withdrawal balance
        const totalTransectionBalance = document.getElementById(transectionStatusHoldingId);
        const transectionStatus = parseFloat(totalTransectionBalance.innerText);

        // adding input and current values and show it to current deposit or withdrawal balance
        const totalTransectionAmount = userTransectionAmount + transectionStatus;
        totalTransectionBalance.innerText = totalTransectionAmount;
        // making the input field empty
        document.getElementById(userTransectionFieldId).value = "";

        // getting the current balance adding new deposit amount and subtracting withdrawal amount
        const getCurrentBalance = document.getElementById('current-balance');
        if(isAdd == true){ // adding new deposit amount if true
            const currentBalance = parseFloat(getCurrentBalance.innerText);
            const totalCurrentBalance = currentBalance + userTransectionAmount;
            getCurrentBalance.innerText = totalCurrentBalance;
        } else { // subtracting withdrawal amount if false
            const currentBalance = parseFloat(getCurrentBalance.innerText);
            const totalCurrentBalance = currentBalance - userTransectionAmount;
            getCurrentBalance.innerText = totalCurrentBalance;
        }
    })
}

bankTransection('deposit-btn', 'user-deposited-amount', 'deposit-balance', true)
bankTransection('withdrawal-btn', 'user-withdrawal-amount', 'withdrawal-balance', false)