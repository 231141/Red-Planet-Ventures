let form = document.forms["space-log"];
form.addEventListener("submit", getValues);

function getValues(event){
    event.preventDefault();

    let formData = {
        "value": parseInt(this.value.value)
    }

    let out = `
    <p>Value: <span>${formData.value}</span></p>
    `
    document.querySelector(".out code").innerHTML = out;

    carLog.push(formData);

    document.getElementById('spaceTotalAmount').innerHTML = carLog.length;

    let totalValue= 0;
    for (i= 0; i < carLog.length; i++){
        totalValue+= carLog[i].value;
    }

    document.getElementById('totalValue').innerHTML = "R" + totalValue;
}