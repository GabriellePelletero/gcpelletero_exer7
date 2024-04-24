//use DOM to make the form functional

window.addEventListener('load', function() {
    //load so that its sure that the js code inside the event listener is executed only after the html form foodform & container foodcards have been loaded into the dom
    //allows us to attach evenlisteners to form submission & creation of food cards without worrying about the elements not being available yet
    const form = document.getElementById('foodform');
    const foodCardsContainer = document.getElementById('foodcards');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //prevents the page from reloading when submitting form
        //when form is submitted, function is triggered allowing js code instead of defualt behavior of browser

        //get form values
        const foodName = document.getElementById('foodname').value;
        const description = document.getElementById('description').value;
        const imageUrl = document.getElementById('imageurl').value;
        const rank = parseInt(document.getElementById('rank').value);

        //create food card element
        const foodCard = document.createElement('div'); //container for the food card
        foodCard.classList.add('foodbox');
        foodCard.innerHTML = ` 
            <img src="${imageUrl}" alt="${foodName}" class="foodimage" />
            <h3>${foodName}</h3>
            <p>${description}</p>
            <button class="deletebutton">Delete</button>
        `; //backticks to set format of the foodcard element

        //add food card to the container based on rank
        const existingCards = foodCardsContainer.querySelectorAll('.foodbox');
        let inserted = false;
        //loop of each of the card
        for (const card of existingCards) {
            const cardRank = parseInt(card.dataset.rank); //rank of current card
            //compare rank of new card & rank of current card
            if (rank < cardRank) {
                foodCardsContainer.insertBefore(foodCard, card);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            foodCardsContainer.appendChild(foodCard); //append to the end of the container
        }

        //clear form inputs
        form.reset();
    });

    //event for delete button
    foodCardsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('deletebutton')) {
            event.target.parentNode.remove();
        }
    });
});
