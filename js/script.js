console.log("hi");
//the form identifies with the variable "space-log"
let form = document.forms["space-log"];
//when users submit then the eventlistener gets values from the form
form.addEventListener("submitLog", getValues);
//this starts an array in the variables
let = spaceLog = [];

//this function causes an event that gets the values
function getValues(event){
    console.log("hello");
    //this prevents page from reloading
    //event.preventDefault();
    //using formData as an object. it's an element that is an input for the form
    let formData = {
        "value": parseInt(this.value.value)
    }
    //this gives out the value of how much input that was given in the form 
    let out = `
    <p>Value: <span>${formData.value}</span></p>
    `
    //the innerHTML chooses an element on the website and gives back the element that uses the same CSS 
    document.querySelector(".out code").innerHTML = out;
    //this information speaks about information of the form and push mean to get more elements. the form data has the information.
    spaceLog.push(formData);
    //this displays the amount of values that were selected
    document.getElementById('spaceTotalAmount').innerHTML = spaceLog.length;
    //this calculates the entire sum of values
    let totalValue= 0;
    for (i= 0; i < spaceLog.length; i++){
        totalValue+= spaceLog[i].value;
    }
    //this displays the data on the webpage
    document.getElementById('totalValue').innerHTML = "R" + totalValue;
}
function decreaseBook(){
    if (document.getElementById('ticketsBook').value != 0){
        document.getElementById('ticketsBook').value = parseInt(document.getElementById('ticketsBook').value) - 1;
    } else{
        document.getElementById('ticketsBook').value = 0;
    }
}

function increaseBook(){
    document.getElementById('ticketsBook').value = parseInt(document.getElementById('ticketsBook').value) + 1;
}

function decreaseMovie(){
    if (document.getElementById('ticketsMovie').value != 0){
        document.getElementById('ticketsMovie').value = parseInt(document.getElementById('ticketsMovie').value) - 1;
    } else{
        document.getElementById('ticketsMovie').value = 0;
    }
}

function increaseMovie(){
    document.getElementById('ticketsMovie').value = parseInt(document.getElementById('ticketsMovie').value) + 1;
}

function decreaseComic(){
    if (document.getElementById('ticketsComic').value != 0){
        document.getElementById('ticketsComic').value = parseInt(document.getElementById('ticketsComic').value) - 1;
    } else{
        document.getElementById('ticketsComic').value = 0;
    }
}

function increaseComic(){
    document.getElementById('ticketsComic').value = parseInt(document.getElementById('ticketsComic').value) + 1;
}


let totalBookCost = 0;
let totalMovieCost = 0;
let totalComicCost = 0;
let finalCost = 0;

function total(){
    totalBookCost = parseInt(document.getElementById('ticketsBook').value) * 50;
    totalMovieCost = parseInt(document.getElementById('ticketsMovie').value) * 70;
    totalComicCost = parseInt(document.getElementById('ticketsComic').value) * 60;
    finalCost = totalBookCost + totalMovieCost + totalComicCost;
    document.getElementById('total').innerHTML = "R " + finalCost;
}

