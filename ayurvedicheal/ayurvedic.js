document.addEventListener("DOMContentLoaded", function () {
    const herbs = document.querySelectorAll(".herb");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const popupDescription = document.getElementById("popup-description");
    const closeBtn = document.querySelector(".close-btn");

    herbs.forEach(herb => {
        herb.addEventListener("click", function () {
            popupTitle.textContent = herb.dataset.name || "Unknown Herb";
            popupImage.src = herb.querySelector("img").src; // Get image from inside herb div
            popupImage.alt = herb.dataset.name || "No Image";
            popupDescription.textContent = herb.querySelector("p").textContent || "No description available.";

            popup.style.display = "flex"; // Show popup
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

const recipes = {
    "Turmeric Golden Milk": {
        ingredients: "Milk, turmeric, black pepper, honey, ginger.",
        steps: [
            "Heat milk in a pan.",
            "Add turmeric, black pepper, and ginger.",
            "Simmer for a few minutes.",
            "Add honey to taste.",
            "Serve warm and enjoy."
        ]
    },
    "Ashwagandha Stress-Relief Tea": {
        ingredients: "Water, ashwagandha powder, honey, cinnamon.",
        steps: [
            "Boil water in a pot.",
            "Add ashwagandha powder and let it simmer.",
            "Strain the tea.",
            "Add honey and cinnamon for taste.",
            "Enjoy your stress-relief tea."
        ]
    },
    "Tulsi Detox Tea": {
        ingredients: "Water, tulsi leaves, honey, lemon juice.",
        steps: [
            "Boil water in a pot.",
            "Add fresh tulsi leaves and simmer.",
            "Strain the tea.",
            "Add honey and lemon juice.",
            "Serve warm and enjoy."
        ]
    },
    "Neem Bitter Detox Juice": {
        ingredients: "Water, neem leaves, honey.",
        steps: [
            "Blend neem leaves with water.",
            "Strain the mixture.",
            "Add honey to reduce bitterness.",
            "Serve fresh and enjoy."
        ]
    },
    "Brahmi Memory Booster Tea": {
        ingredients: "Water, Brahmi leaves, honey, lemon juice.",
        steps: [
            "Boil water in a pot.",
            "Add fresh Brahmi leaves and let them simmer.",
            "Strain the tea into a cup.",
            "Add honey and lemon juice for taste.",
            "Enjoy your memory booster tea."
        ]
    },
    "Giloy Immunity Tea": {
        ingredients: "Water, giloy powder, honey, black pepper.",
        steps: [
            "Boil water in a pot.",
            "Add giloy powder and simmer for a few minutes.",
            "Strain the tea into a cup.",
            "Add honey and black pepper.",
            "Drink to boost immunity."
        ]
    },
    "Aloe Vera Digestive Juice": {
        ingredients: "Aloe vera gel, water, lemon juice, honey.",
        steps: [
            "Blend aloe vera gel with water.",
            "Strain the mixture.",
            "Add lemon juice and honey.",
            "Serve chilled for best results."
        ]
    },
    "Bhringraj Hair & Skin Tonic": {
        ingredients: "Water, bhringraj powder, honey.",
        steps: [
            "Boil water in a pot.",
            "Add bhringraj powder and let it simmer.",
            "Strain the tonic into a cup.",
            "Add honey for sweetness.",
            "Drink warm for healthy hair and skin."
        ]
    }
};

function selectRecipe() {
    const selectedRecipe = document.getElementById('recipeDropdown').value;
    if (recipes[selectedRecipe]) {
        document.getElementById('recipeTitle').innerText = selectedRecipe;
        document.getElementById('recipeIngredients').innerText = recipes[selectedRecipe].ingredients;
        const stepsHtml = recipes[selectedRecipe].steps.map(step => `<p>➡️ ${step}</p>`).join('');
        document.getElementById('recipeStepsContainer').innerHTML = stepsHtml;
        document.getElementById('recipeDisplay').style.display = 'block';
    }
}


function buyNow(herbName) {
    const amazonSearchUrl = `https://www.amazon.in/s?k=${encodeURIComponent(herbName)}`;
    window.open(amazonSearchUrl, '_blank');
}


document.querySelectorAll(".new-buy-now").forEach(button => {
    button.addEventListener("click", function() {
        alert("New Buy Now button clicked!");
    });
});
