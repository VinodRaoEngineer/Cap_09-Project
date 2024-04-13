import { navbar } from "./navbar.js";

document.getElementById("navbar").innerHTML= navbar()

let form = document.querySelector("form").addEventListener("submit",(event)=>{
    storingData(event)
})

let arr = []

function storingData(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(name,email,password)

    let obj = {
        name:name,
        email:email,
        password:password
    }
  arr.push(obj)
  console.log(arr)

  localStorage.setItem("userDetail",JSON.stringify(arr))
  alert("Registration Complite")
  window.location.href= "signup.html"
}