function getInputeFeildValueByID(inputeId){

    const inputeFeildValue = document.getElementById(inputeId);
    const inputeFeildValueString = inputeFeildValue.value;

    const inputFeildValueInt = parseFloat(inputeFeildValueString);

    inputeFeildValue.value = '';
    return inputFeildValueInt;
    
}

function getElementValueById(elimentId){
    const elementvalue = document.getElementById(elimentId);
    const elementvalueString = elementvalue.innerText;
    const elementvalueInt = parseFloat(elementvalueString);
    elementvalue.innerText = '';
    return elementvalueInt;
}
function setElimentValue(elimentId, newValue){
    const newElimentValue = document.getElementById(elimentId);
    newElimentValue.innerText = newValue;



}