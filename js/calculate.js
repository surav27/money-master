document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeValue = getInputeFeildValueByID('income-field');
    
    const foodValue = getInputeFeildValueByID('food-field')
    const rentValue = getInputeFeildValueByID('rent-field')
    const clothesValue = getInputeFeildValueByID('clothes-field')

    const totalExpansesValue = foodValue + rentValue + clothesValue;
    setElimentValue('total-expanses', totalExpansesValue);

    const totalBalance = incomeValue - totalExpansesValue;
    setElimentValue('total-balance', totalBalance);

    
    
})