// Function to get values for buy space
document.addEventListener("DOMContentLoaded", function () {

    fetch("fetch_properties.php") //Give .php file name here
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById("cardsContainer-buy");

            // Create cards for each property
            data.forEach(property => {
                const card = document.createElement("div");
                card.className = "property-card";

                const propId = document.createElement("h5");
                propId.className = "property-id"
                propId.textContent = property.id;
                card.appendChild(propId);

                const image = document.createElement("img");
                image.src = property.thumbnail;
                card.appendChild(image);

                const propertyContent = document.createElement("div"); 
                propertyContent.className = "property-content";

                const location = document.createElement("p");
                location.textContent = property.location;
                propertyContent.appendChild(location); 

                const description = document.createElement("p");
                description.textContent = property.description;
                propertyContent.appendChild(description); 

                card.appendChild(propertyContent);

                const knowMoreButton = document.createElement("button");
                knowMoreButton.textContent = "Know More";
                knowMoreButton.addEventListener("click", () => {
                    // Open a modal or show more details for the property
                    // You can customize this part according to your needs
                    // For example: showPropertyDetails(property);
                });
                card.appendChild(knowMoreButton);

                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});


// Function to get values for rent space
document.addEventListener("DOMContentLoaded", function () {

    fetch("fetch_properties.php") //Give .php file name here
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById("cardsContainer-rent");

            // Create cards for each property
            data.forEach(property => {
                const card = document.createElement("div");
                card.className = "property-card";

                const propId = document.createElement("h5");
                propId.className = "property-id"
                propId.textContent = property.id;
                card.appendChild(propId);

                const image = document.createElement("img");
                image.src = property.thumbnail;
                card.appendChild(image);

                const propertyContent = document.createElement("div"); 
                propertyContent.className = "property-content";

                const location = document.createElement("p");
                location.textContent = property.location;
                propertyContent.appendChild(location); 

                const description = document.createElement("p");
                description.textContent = property.description;
                propertyContent.appendChild(description); 

                card.appendChild(propertyContent);

                const knowMoreButton = document.createElement("button");
                knowMoreButton.textContent = "Know More";
                knowMoreButton.addEventListener("click", () => {
                    // Open a modal or show more details for the property
                    // You can customize this part according to your needs
                    // For example: showPropertyDetails(property);
                });
                card.appendChild(knowMoreButton);

                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    const hoverHeading = document.querySelector(".about-us .about-top h2");
    const hoverParagraph = document.querySelector(".about-us .about-top p");
  
    hoverHeading.addEventListener("mouseover", function () {
      hoverParagraph.classList.add("show"); 
    });
  
    hoverHeading.addEventListener("mouseout", function () {
      hoverParagraph.classList.remove("show"); 
    });
});

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Display the overlay with the success message
    const successOverlay = document.getElementById("successOverlay");
    successOverlay.style.display = "flex";
    
    // Reset the form after a delay (you can adjust the delay)
    setTimeout(function () {
      event.target.reset();
      successOverlay.style.display = "none";
    }, 3000); // Reset after 3 seconds (adjust as needed)
});
  

function goToAbout(){
    window.location.href = "about.html"
}
  
  