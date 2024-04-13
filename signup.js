import { navbar } from "./navbar.js";

document.getElementById("navbar").innerHTML= navbar()


document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    let email = document.getElementById("email").value
let password = document.getElementById("password").value

    console.log(email,password)

    let Detail = {
        email:email.value,
        password:password.value
    }
    // console.log(Detail)
    let data = JSON.parse(localStorage.getItem("userDetail")) || []
console.log( "data", data);

if(Detail.email === data.email && Detail.password === data.password){
    window.location.href = "product.html"
    
    alert("login successfull")
}else{
    alert("invalid email or password")
}

})

