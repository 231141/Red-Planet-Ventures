console.log("hi");

let marsTickets = 0;


//the form identifies with the variable "space-log"
// let form = document.forms["SubmitForm"];
//when users submit then the eventlistener gets values from the form
// form.addEventListener('submit', getValues)ner("submit", getValues);
//this starts an array in the variables

let = spaceLog = [];

//this function causes an event that gets the values
function getValues(event) {
    console.log("hello");
    //this prevents page from reloading
    event.preventDefault();
    //using formData as an object. it's an element that is an input for the form
    let formData = {
        "value": parseInt(this.value.value)
    }
    //this gives out the value of how much input that was given in the  form 
    let out =
        `<p>Value: <span>${formData.value}</span></p>`
    //the innerHTML chooses an element on the website and gives back the element that uses the same CSS 
    document.querySelector(".out code").innerHTML = out;
    //this information speaks about information of the form and push mean to get more elements.the form da// ta has the information.
    spaceLog.push(formData);
    //this displays the amount of va// lues that were selected
    document.getElementById('spaceTotalAmount').innerHTML = spaceLog.length;
    //this calculates the entire sum of values    let totalValue= 0;
    for (i = 0; i < spaceLog.length; i++) {
        totalValue += spaceLog[i].value;

    }

    //this displays the data on the webpage
    document.getElementById('totalValue').innerHTML = "R" + totalValue;

}
function decreaseMars() {
    let marsTicketsTemp = parseInt(document.getElementById('ticketsMars').value);
    console.log("Hello, the number is  " + marsTicketsTemp);

    marsTicketsTemp = marsTicketsTemp - 1;

    if (marsTicketsTemp < 0) {
        marsTicketsTemp = 0;
    }
    document.getElementById('ticketsMars').value = marsTicketsTemp;
    marsTickets = marsTicketsTemp;
}

function increaseMars() {
    let groovy = parseInt(document.getElementById('ticketsMars').value);
    console.log("Howdy, the number is " + groovy);
    console.log(groovy);

    groovy = groovy + 1;

    document.getElementById('ticketsMars').value = groovy;
    marsTickets = groovy;
}

function decreaseSaturn() {
    if (document.getElementById('ticketsSaturn').value != 0) {
        document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1;
    } else {
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increaseSaturn() {
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}

function decreaseBox() {
    if (document.getElementById('ticketsBox').value != 0) {
        document.getElementById('ticketsBox').value = parseInt(document.getElementById('ticketsBox').value) - 1;
    } else {
        document.getElementById('ticketsBox').value = 0;
    }
}

function increaseBox() {
    document.getElementById('ticketsBox').value = parseInt(document.getElementById('ticketsBox').value) + 1;
}

// 


function total() {
    let totalMarsCost = 0;
    let totalSaturnCost = 0;
    let finalCost = 0;

    totalMarsCost = marsTickets * 50;
    totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 70;
    totalBoxCost = parseInt(document.getElementById('ticketsBox').value) * 80;
    finalCost = totalMarsCost + totalSaturnCost + totalBoxCost;
    document.getElementById('total').innerHTML = "R " + finalCost;
}

function CheckWhichPlanetsHaveTickets()
{
       if (marsTickets > 0) 
    {
        // document.getElementById('DummyName').innerHTML = `<He// ader>Ma// rs Tickets = 2`;
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const searchForm = document.getElementById('search-form');
const saturnLink = document.getElementById('saturn-link');

searchForm.addEventListener('input', () => {
  const searchTerm = searchForm.querySelector('input[name="search-term"]').value.toLowerCase();
  if (searchTerm === 'saturn') {
    searchForm.action = 'saturn.html';
    saturnLink.style.display = 'inline';
  } else {
    searchForm.action = 'mars.html';
    saturnLink.style.display = 'none';
  }
});

saturnLink.addEventListener('click', () => {
  searchForm.submit();
});

