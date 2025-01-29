//const { response } = require("express");

document.querySelector("#btn-search").addEventListener("click", function(){
    
    const departureQuery = document.querySelector("#departure-search").value;
    const arrivalQuery = document.querySelector("#arrival-search").value;
    const dateQuery = document.querySelector("#date-search").value;
    
    console.log(departureQuery);
    console.log(arrivalQuery);
    console.log(dateQuery);
    //departure = departureQuery;
    //arrival = arrivalQuery;
    fetch(`http://localhost:3000/trips/${departureQuery}/${arrivalQuery}/${dateQuery}`)
    .then(response => response.json())
    .then(data => { 
        for(let i = 0; i < data.length; i++)
        {
            document.querySelector("#tripList").innerHTML += 
            `<li>${data.departure} > ${data.arrival}   ${data.date}</li>`
        }

    })
});
