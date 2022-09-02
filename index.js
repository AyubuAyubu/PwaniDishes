console.log('working')


function Dishes(){  
  fetch('  http://localhost:3000/dishes')
    .then((response) => response.json())
    .then((data) => console.log(data => {
      console.log(data)
    }));
}




// const dishesApi="https://www.themealdb.com/api/json/v1/1/categories.php"

// const dishes = () => {
//     const inputDishesForm = document.querySelector('form');
  
//     inputDishesForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const input=e.target['input#SearchFoodByID'].value
//      // const input = document.querySelector('input#SearchFoodByID');

//       fetch(`dishesApi/${input}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         const myName = document.querySelector('section#FoodDetails h3');
//         const costPrice = document.querySelector('section#FoodDetails p');
//         Foodname.innerText = data.myName ;
//         price.innerText = data.costPrice;
        
//       });
  
//     });
//   }
  
//   document.addEventListener('DOMContentLoaded', dishes);
  