"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    
    $.get("/fortune", function (results){
        $("#fortune-text").html(results);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function displayResults(results){
    alert(results['forecast']);
    
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    $.get(url, formData, displayResults); 

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    
    $.post("/order-melons", INFO, displayMessage);
}

$("#order-form").on('submit', orderMelons);


