async function displayFoods() {
    // document.getElementById("food-item").style.display = 'block';
    let searchInputText = document.getElementById("inputValue").value.trim();
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`)
    //     // we have to give input first alphabet of food name.like a,b,c:
    //     .then(res => res.json())
    //     .then(data => FoodItem(data))
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`
    const res = await fetch(url);
    const data = await res.json();
    FoodItem(data)




    // const foodList = document.getElementById("food-item");
    // const FoodItem = data => {
    //     console.log(data);
    //     foodList.innerHTML = '';
    //     data.meals.forEach(food => {
    //         const div = document.createElement("div");
    //         div.className = 'food-name';
    //         const mealsInfo = `
    //        <div class="food-container">
    //        <div class="div-Image"><img src=${food.strMealThumb}></div>
    //        <p class="text-style">${food.strMeal}</p>
    //        <button class="button" onclick="foodDetails('${food.idMeal}')">Click</button>
    //        </div>
    //         `;

    //         div.innerHTML = mealsInfo;
    //         foodList.appendChild(div);
    //     });
    // }
}

const foodList = document.getElementById("food-item");
const FoodItem = data => {
    console.log(data);
    foodList.innerHTML = '';
    data.meals.forEach(food => {
        const div = document.createElement("div");
        div.className = 'food-name';
        const mealsInfo = `
       <div class="food-container">
       <div class="div-Image"><img src=${food.strMealThumb}></div>
       <p class="text-style">${food.strMeal}</p>
       <button class="button" onclick="foodDetails('${food.idMeal}')">Click</button>
       </div>
        `;

        div.innerHTML = mealsInfo;
        foodList.appendChild(div);
    });
}

const foodDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodInfo(data.meals[0]))

    document.querySelector("#details-image").style.display = 'block';


    const displayFoodInfo = foodInfo => {
        console.log(foodInfo);
        const foodDetails = document.getElementById('details-image');
        foodDetails.innerHTML = `
         
        <div class="click-image"><img src="${foodInfo.strMealThumb}"></div>

       <br>
       <div><h3>ingredients</h3></div>

       <div>
       <input type="checkbox"> ${foodInfo.strIngredient1}<br>
       <input type="checkbox"> ${foodInfo.strIngredient2}<br>
       <input type="checkbox"> ${foodInfo.strIngredient3}<br>
       <input type="checkbox"> ${foodInfo.strIngredient4}<br>
       <input type="checkbox"> ${foodInfo.strIngredient5}<br>
       <input type="checkbox"> ${foodInfo.strIngredient5}<br>
       <input type="checkbox"> ${foodInfo.strIngredient6}<br>
       <input type="checkbox"> ${foodInfo.strIngredient7}
        
     
       </div>
       
        
        `;
    }
}