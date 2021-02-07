function displayFoods() {
    // document.getElementById("food-item").style.display = 'block';
    let searchInputText = document.getElementById("inputValue").value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`)
        // we have to give input first alphabet of food name.like a,b,c:
        .then(res => res.json())
        .then(data => FoodItem(data))




    const foodList = document.getElementById("food-item");
    const FoodItem = data => {
        console.log(data);
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







// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
//     .then(res => res.json())
//     .then(data => FoodItem(data))


// const foodList = document.getElementById("food-item");
// const FoodItem = data => {
//     console.log(data.meals);
//     data.meals.forEach(food => {
//         const div = document.createElement("div");
//         div.className = 'food-name';
//         const mealsInfo = `
//             <div class="div-Image"><img src=${food.strMealThumb}></div>
//             <p class="text-style">${food.strMeal}</p>
//             `;

//         div.innerHTML = mealsInfo;
//         foodList.appendChild(div);
//     });
// }

// function FoodItem(data) {
//     console.log(data.meals);
//     data.meals.forEach(food => {
//         const div = document.createElement("div");
//         div.className = 'food-name';
//         const mealsInfo = `
//             <div class="div-Image"><img src=${food.strMealThumb}></div>
//             <p class="text-style">${food.strMeal}</p>
//             `;

//         div.innerHTML = mealsInfo;
//         foodList.appendChild(div);
//     });

// }

// for (let i = 0; i < data.meals.length; i++) {
//     const name = data.meals[i];
//     const food = name.strMeal;
//     const div = document.createElement("div");
//     div.className = 'food-name';
//     const mealsInfo = `
//     <div class="div-Image"><img src=${name.strMealThumb}></div>
//     <p class="text-style">${name.strMeal}</p>
//     `;

//     div.innerHTML = mealsInfo;
//     foodList.appendChild(div);


// }
// console.log(data.meals)

// for (let i = 0; i < data.meals.length; i++) {
//     const name = data.meals[i];
//     const food = name.strMeal;
//     console.log(food);

// }
// <>${foodInfo.strIngredient2}</>
// <li>${foodInfo.strIngredient3}</li>
// <li>${foodInfo.strIngredient4}</li>
// <li>${foodInfo.strIngredient5}</li>
// <li>${foodInfo.strIngredient6}</li>
// <li>${foodInfo.strIngredient7}</li>
// </ul>