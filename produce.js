import { navbar } from "./navbar.js";
document.getElementById("navbar").innerHTML = navbar();


let container = document.querySelector("#container");

let mainData = [];

// filter by price

document.getElementById("filter").addEventListener("change", () => {
  let sort = document.getElementById("filter").value;
  sortPrice(sort);
});

function sortPrice(order) {
  if (order === "asc") {
    mainData.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (order === "desc") {
    mainData.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  console.log(mainData);
  container.innerHTML = null;

  displayData(mainData);
}

// filter data by star-rating
let rating = document.getElementById("rating").addEventListener("change", () => {
  let rate = document.getElementById("rating").value
  sortByRating(rate);
});
function sortByRating(rating) {
  if (rating === "asc") {
    mainData.sort(function (a, b) {
      return a.rating.rate - b.rating.rate;
    });
  } else if (rating === "desc") {
    mainData.sort(function (a, b) {
      return b.rating.rate - a.rating.rate;
    });
  }
  console.log(mainData);
  container.innerHTML = "";
  displayData(mainData);
}

// filter data by category
let category = document.getElementById("category").addEventListener("change", () => {
  let cate = document.getElementById("category").value
  filterByCategory(cate);
});

function filterByCategory(category) {
  if (category === "") {
    // If no category is selected, display all data
    displayData(mainData);
  } else {
    // Filter the mainData array based on the selected category
    let filteredData = mainData.filter((ele) => ele.category === category);
    displayData(filteredData);
  }
}

let url = "https://fakestoreapi.com/products";
const getData = async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    mainData = data;
    console.log(data);
    displayData(mainData);
  } catch (error) {
    console.log(error);
  }
};
getData();

const displayData = (data) => {
  container.innerHTML = "";
  data.forEach((ele, i) => {
    let div = document.createElement("div");
    div.classList.add("product-container");

    let img = document.createElement("img");
    img.src = ele.image;

    let title = document.createElement("h3");
    title.textContent = `Title: ${ele.title}`;
    title.id = ele.id;

    let desc = document.createElement("p");
    desc.textContent = `Detaile : ${ele.description.slice(0, 25)}...`;

    


    let rating = document.createElement("p");
    rating.innerHTML = ` <b>Rating :</b> ${ele.rating.rate} &#9733; `;

    // let count = document.createElement("p");
    // count.innerHTML = `<b>Count :</b> ${ele.rating.count}`;


    


    let category = document.createElement("p");
    category.innerHTML = `<b>category :</b> ${ele.category}`;
    category.classList.add("category");

    let price = document.createElement("p");
    price.innerHTML = `<b>  ₹: ${ele.price} </b>`;

    let btn = document.createElement("button");
    btn.textContent = "Add to Bag";
    btn.addEventListener("click", () => {
      addToCart(ele, i);
    });

    div.append(img, title, desc, rating, category, price, btn);
    container.append(div);
  });
};

function addToCart(ele, i) {
  let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

  cartArr.push(ele);
  console.log(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  cartCount(cartArr);
  alert("product added in cart");
}

function cartCount(cart) {
  document.querySelector("#span").innerText = `${cart.length}`;
}
