
function buttonClicked(){
    var mealInput=document.getElementById("meals_input").value; //fetch baca city apa

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
    .then((response) => response.json()) //convert ke json ke js object
    .then((data) => {
        console.log(data); // Data is a JavaScript object
        var meal = data.meals[0]; // Assuming you want the first meal found

        for (var i = 0; i < 5; i++){
            
        }''
    if (meal) {
        var idMeal = meal.idMeal;
        var strMeal = meal.strMeal;
        var strCategory = meal.strCategory;
        var strArea = meal.strArea
        var strInstructions = meal.strInstructions
        var strMealThumb = meal.strMealThumb;
        // Update the HTML element with the meal information
        var mealImage = document.createElement("img");
        mealImage.src = strMealThumb;

        var strYoutube = meal.strYoutube;
        strYoutube.href 
        var strSource = meal.strSource;

        
        document.getElementById("display").innerHTML = `<br>Meal Id: ${idMeal} <br> Meal Name: ${strMeal} <br> Category of the meal: ${strCategory} <br> Meal Origin: ${strArea} <br>`
        document.getElementById("display").appendChild(mealImage);
        document.getElementById("display2").innerHTML = ` Instructions:<br> ${strInstructions}`
        
        var videoLink = document.createElement("a");
                videoLink.href = strYoutube; // Set the href attribute to the YouTube URL
                videoLink.innerHTML = `Video Tutorial: ${strYoutube}`;
                videoLink.target = "_blank"; // Open the link in a new tab
                document.getElementById("link").innerHTML = "";
                document.getElementById("link").appendChild(videoLink);

                // Add the website source link
                document.getElementById("link").innerHTML += `<br> Website: ${strSource}`;
    } else {
        console.log("No meals found for the given input.");
    }
    })

    .catch((error) => {
        console.error("Error fetching data: " + error);
    });
   
}
