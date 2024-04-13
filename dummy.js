



let container = document.getElementById("container");


let arr = []


const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
    const products = data.products
      displayData(products);
    } catch (error) {
      console.log(error);
    }
  };
 





  let cartArr = JSON.parse(localStorage.getItem('cart')) || []
  console.log(cartArr)
  


function displayData(product){

  product.forEach((ele,i) => {
    let div = document.createElement("div");
    div.classList.add("product-card");
  
    let thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add("thumbnail-container");
  
    let img = document.createElement("img");
    img.src = ele.images[0];
    thumbnailContainer.appendChild(img);
  
    let textDetailsContainer = document.createElement("div");
    textDetailsContainer.classList.add("text-details-container");
  
    let title = document.createElement("h3");
    title.innerText = ele.title;
    title.classList.add("text-detail");
  
    let desc = document.createElement("p");
    desc.innerHTML = `&nbsp <b>Detaile : </b> ${ele.description.split(" ").slice(0, 5).join(" ")}...`;
    desc.classList.add("text-detail");
  
    let price = document.createElement("p");
    price.innerHTML =`&nbsp <b>Price</b> : ${ ele.price}`;
    price.classList.add("text-detail");
  
    let discountPercentage = document.createElement("p");
    discountPercentage.innerHTML = `&nbsp <b>Discount:</b> ${ele.discountPercentage
    }`
    discountPercentage.classList.add("text-detail");
  
    let rating = document.createElement("p");
    let formattedRating = parseFloat(ele.rating).toFixed(1);
    rating.innerHTML = `&nbsp <b>Rating:</b> ${formattedRating } &#9733;  `
    
    rating.classList.add("text-detail");
  
    let brand = document.createElement("h2");
    brand.innerText = ele.brand;
    brand.classList.add("text-detail");
  
    let category = document.createElement("p");
    category.innerHTML = `&nbsp <b>Category: </b>${ele.category}`;
    category.classList.add("text-detail");

    let btn = document.createElement("button")
    btn.innerText = "Add To Bag";
    btn.addEventListener("click",()=>{
      addToCart(ele,i)
    })
  
    textDetailsContainer.append(brand, title, desc, price, discountPercentage, rating, category ,btn);
  
    div.append(thumbnailContainer, textDetailsContainer);
    container.append(div);
  });
};


function addToCart(ele,i){

   cartArr.push(ele)
   console.log(cartArr)
  localStorage.setItem("cart",JSON.stringify(cartArr))
  alert("product added to bag")
}

getData();

