document.getElementById('tax-btn').addEventListener('click', function(){
    const taxValue = getInputeFeildValueByID('tax-field');
    const totalTax = taxValue * 100;

    setElimentValue('save-total', totalTax); 

    const remaingBalance = getElementValueById('total-balance');
    const totalRemainingBalance = remaingBalance - totalTax
    setElimentValue('remaing-balance', totalRemainingBalance);
})