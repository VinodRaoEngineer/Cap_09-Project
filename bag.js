
  
  


  import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let container = document.querySelector("#container");
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);
cartCount(cartArr);

function cartCount(cart) {
  document.querySelector("#span").textContent = `${cart.length}`;
}

const displayData = (data) => {
  console.log(data)
  container.innerHTML = "";

  data.forEach((ele, i) => {
    let div = document.createElement("div");
    div.classList.add("product1-container");

    let img = document.createElement("img");
    img.src = ele.image;

    let title = document.createElement("h3");
    title.textContent = `Title: ${ele.title}`;
    title.id = ele.id;

    let desc = document.createElement("p");
    desc.textContent = `Description : ${ele.description.slice(0, 75)}`;

    let rating = document.createElement("p");
    rating.innerText = `Rating : ${ele.rating.rate}`;

    let category = document.createElement("p");
    category.innerText = `category:${ele.category}`;

    let price = document.createElement("p");
    price.innerText = `INR : ${ele.price}`;

    let btn = document.createElement("button");
    btn.textContent = "Remove From Bag";
    btn.addEventListener("click", () => {
      removeFromCart(ele, i);
    });

    div.append(img, title, desc, rating, category, price, btn);
    container.append(div);
  });

  // After rendering displayData, call showData
  
};

// function showData(product) {
//   container.innerHTML = " "
//   console.log(product,"product")
//   product.forEach((ele, i) => {
//     let div = document.createElement("div");
//     div.classList.add("product-card");

//     let thumbnailContainer = document.createElement("div");
//     thumbnailContainer.classList.add("thumbnail-container");

//     let img = document.createElement("img");
//     img.src = ele.images;
//     thumbnailContainer.appendChild(img);

//     let textDetailsContainer = document.createElement("div");
//     textDetailsContainer.classList.add("text-details-container");

//     let title = document.createElement("h3");
//     title.innerText = ele.title;
//     title.classList.add("text-detail");

//     let desc = document.createElement("p");
//     desc.innerHTML = `&nbsp <b>Detaile : </b> ${ele.description
//       .split(" ")
//       .slice(0, 5)
//       .join(" ")}...`;
//     desc.classList.add("text-detail");

//     let price = document.createElement("p");
//     price.innerHTML = `&nbsp <b>Price</b> : ${ele.price}`;
//     price.classList.add("text-detail");

//     let discountPercentage = document.createElement("p");
//     discountPercentage.innerHTML = `&nbsp <b>Discount:</b> ${
//       ele.discountPercentage
//     }`;
//     discountPercentage.classList.add("text-detail");

//     let rating = document.createElement("p");
//     let formattedRating = parseFloat(ele.rating).toFixed(1);
//     rating.innerHTML = `&nbsp <b>Rating:</b> ${formattedRating} &#9733;  `;

//     rating.classList.add("text-detail");

//     let brand = document.createElement("h2");
//     brand.innerText = ele.brand;
//     brand.classList.add("text-detail");

//     let category = document.createElement("p");
//     category.innerHTML = `&nbsp <b>Category: </b>${ele.category}`;
//     category.classList.add("text-detail");
   
    
//     let btn = document.createElement("button");
//     btn.textContent = "Remove";
//     btn.addEventListener("click", () => {
//       removeFromCart(ele, i);
//     });
    

//     textDetailsContainer.append(
//       brand,
//       title,
//       desc,
//       price,
//       discountPercentage,
//       rating,
//       category,
//       btn
//     );

//     div.append(thumbnailContainer, textDetailsContainer);
//     container.append(div);
//   });
// };



function removeFromCart(ele, i) {
  cartArr.splice(i, 1);
  console.log(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayData(cartArr);
  // showData(cartArr)
}


displayData(cartArr)