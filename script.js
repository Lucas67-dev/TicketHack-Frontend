//const trainImage = document.querySelector("#trainImage");
//const futureTrip = document.querySelector("#future-trip-text");
const tripContainer = document.querySelector("#tripContainer");

document.querySelector("#btn-search").addEventListener("click", function(){
    
    const departureQuery = document.querySelector("#departure-search").value;
    const arrivalQuery = document.querySelector("#arrival-search").value;
    const dateQuery = document.querySelector("#date-search").value;
    
    tripContainer.style.opacity = 1;
    tripContainer.innerHTML = null;

    fetch(`http://localhost:3000/trips/${departureQuery}/${arrivalQuery}/${dateQuery}`)
    .then(response => response.json())
    .then(data => { 
        
        console.log(data);
        if(data.trips.length != 0)
        {
            for(let i = 0; i < data.trips.length; i++)
            {
                tripContainer.innerHTML += 
                `<div class = "row">
                    <p> ${data.trips[i].departure}  >  ${data.trips[i].arrival}</p>  
                    <p>${data.trips[i].date.slice(12, 16)}</p>  
                    <p>$${data.trips[i].price}</p>
                    <button type="button" class = "book">Book</button>
                </div>`;
            }
        }
        else{
            tripContainer.innerHTML += 
            `<div class = "column">
                <img id = "notFound" src="assets/notfound.png" alt="">
                <h4 id = "not-found-text">No trip found...</h4>
            </div>`

        }
        

    })
});
