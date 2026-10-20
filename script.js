// Initially, I considered using more complexed functions to track user paths. 
// However, due to limited ability, and after reviewing W3Schools (https://www.w3schools.com/js/js_events.asp), 
// I used basic 'mouseenter' events, as its sufficient for this prototype.
// In addition, I used a simple variable 'inspectedCount' to track user’s progress during inspection, instead of complex arrays or Maps.

// All the elements that is needed
const cards = document.querySelectorAll('.card');
const counterDisplay = document.getElementById('count');
const statusText = document.getElementById('status-text');
const resetBtn = document.getElementById('reset-btn');

let inspectedCount = 0;
let keyFound = false;

// Add hover events to each card
cards.forEach(function(card) {
    
    // When mouse enters the card
    card.addEventListener('mouseenter', function() {
        // If user haven't inspected this card yet
        if (!card.classList.contains('inspected')) {
            card.classList.add('inspected');
            inspectedCount++;
            counterDisplay.textContent = inspectedCount;

            // Check if this is the plant (the key)
            if (card.getAttribute('data-item') === 'plant' && !keyFound) {
                keyFound = true;
                statusText.textContent = "You found the key! You can leave.";
                statusText.style.color = "#654716";
                statusText.style.fontWeight = "bold";
                document.body.style.backgroundColor = "#faf3e4ff"; // When user finds the key, the background color will change to notify.
            }
        }
    });
});

// Reset button logic
resetBtn.addEventListener('click', function() {
    // Reset variables
    inspectedCount = 0;
    keyFound = false;
    
    // Reset display
    counterDisplay.textContent = "0";
    statusText.textContent = "Objects inspected: 0/6";
    statusText.style.color = "inherit";
    statusText.style.fontWeight = "normal";
    document.body.style.backgroundColor = "#f6e7cd";

    // Remove the 'inspected' class from all cards
    cards.forEach(function(card) {
        card.classList.remove('inspected');
    });
});

// [CHALLENGES & FUTURE]
//  In this project, one major challenge was handling with making suitable image size.
//  Because I used a single image for each object, I had to learn to adjust the size of the image through CSS to make sure they fit the cards evenly.

//  By making this protoype, I think its basic structure is highly beneficial for future development of the game, as it provided a solid foundation.
//  If this project were expanded into a full game, I will try to add more advanced functions, such as an interactive 3d environment, background music and sound effect to make the game become more immersive.
//  Also, I may consider adding more elements and playing methods to enhance the interestingness of the game.

// Lastly, I think the future challenge would be adapting for mobile devices, as they may not support hover natively. 
// I would need to implement touch or click actions alternativly for mobile users.